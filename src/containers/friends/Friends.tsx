import React, { useEffect, useState } from 'react';
import './Friends.scss';
import { IonPage, IonContent, IonSearchbar, IonToast, IonText } from '@ionic/react';
import Toolbar from '../../components/ToolBar/Toolbar';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../store/actions/index';
import { RootState } from '../../store/store';
import Friend from '../../components/Friend/Friend';
import { API, graphqlOperation, Storage } from 'aws-amplify';
import * as Queries from '../../graphql/queries';
import UserSearch from '../../components/UserSearch/UserSearch';
import { NotificationType } from '../../API';
import { generateNotification } from '../../shared/utility';
import CustomLoading from '../../components/CustomLoading/CustomLoading';
import CustomLoadingPage, { LoadingType } from '../../components/CustomLoadingPage/CustomLoadingPage';
import friendsAnimation from '../../Animations/friendsanimation.json';
import noFriendsAnimation from '../../Animations/nofriendsanimation.json';
import CustomAnimation from '../../components/CustomAnimation';

export interface FriendsProps {
    
}
 
const Friends: React.SFC<FriendsProps> = () => {

    const dispatch = useDispatch();

    const deleteFriend = (friendId: string, originalId: string, userId: string, files: any) => dispatch(actions.deleteFriend(friendId, originalId, userId, files));
    
    const user = useSelector((state: RootState) => state.AuthReducer.user);

    const downloading = useSelector((state: RootState) => state.FriendReducer.downloadingFriends);

    const deleting = useSelector((state: RootState) => state.FriendReducer.deleting);

    const friends = useSelector((state: RootState) => state.FriendReducer.friends);

    const files = useSelector((state: RootState) => state.FileReducer.files);

    const notifications = useSelector((state: RootState) => state.NotificationReducer.notifications);

    const recoverFriendsError = useSelector((state: RootState) => state.FriendReducer.recoverFriendsError);

    const [keyList, setKeyList] = useState([]);
    const [searchText, setSearchText] = useState<String>("");
    const [searching, setSearching] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const [errorPetition, setErrorPetition] = useState(false);
    const [messageError, setMessageError] = useState("");
    const [users, setUsers] = useState([]);
    const [isBusy, setBusy] = useState(false);

    //Funcion para eliminar un amigo
    const handleDeleteFriend = async(friendId: string, originalId: string) => {
        deleteFriend(friendId, originalId, user.identityId, files);
    }

    useEffect(() => {
        if (searchText) {
            setBusy(true);
            searchUsers(searchText.toLowerCase()!)
            Storage.list('', {level: 'public'})
            .then(result => {
                setKeyList(result);
                setBusy(false);
            })
            .catch(err => {
                console.log(err);
                setBusy(false);
            }); 
        } else {
            setUsers([]);
            setKeyList([]);
        }
    }, [searchText]);

    useEffect(() => {
    },[]);

    //Revisa si ya hay notificacion pendiente del usuario para ver si puede enviar otra mas
    const checkNotificationConditions = async(friendId: String) => {
        if (notifications.filter((notification: any) => notification.from.id === friendId && notification.type === NotificationType.SENDPETITION).length > 0) {
            setMessageError("Ya tienes una petición de este usuario.");
            setErrorPetition(true);
            setShowToast(true);
            return false;
        } else if (friends.filter((friend:any) => friend.id === friendId+user.identityId).length > 0) {
            setMessageError("Ya está agregado.");
            setErrorPetition(true);
            setShowToast(true);
            return false;
        } else {
            const result: any = await API.graphql(graphqlOperation(Queries.listFriendRequests, {
                filter: {
                    id: {
                        beginsWith: friendId+""+user.identityId
                    },
                    type: {
                        eq: NotificationType.SENDPETITION
                    }
                }
            }));
            if (result.data.listFriendRequests.items.length !== 0) {
                setMessageError("Ya le has enviado una petición.");
                setErrorPetition(true);
                setShowToast(true);
                return false;
            }
        }
        return true;
    }

    const generateFriendPetition = async (friendId: String) => {
        if (await checkNotificationConditions(friendId)) { 
            await generateNotification(user.identityId, friendId, NotificationType.SENDPETITION)
            .then(e => {
                setShowToast(true);
            })
            .catch(err => {
                setMessageError("Se ha producido un error inesperado.");
                setErrorPetition(true);
                setShowToast(true);
            })
        }
    }

    async function searchUsers(name: String) {
        try {
            setSearching(true);
            const result: any = await API.graphql(graphqlOperation(Queries.listUsers, {
                filter: {
                    name: {
                        contains: name
                    }
                }
            }));
            setSearching(false);
            setUsers(result.data.listUsers.items);
          } catch (error) {
            console.log(error);
            setSearching(false);
          }
    }



    return (
        <IonPage>
            <CustomLoading showLoading={deleting}/>
            <Toolbar />
            <IonSearchbar className="ion-no-padding custom-ion-search-bar-friends darkcolor" placeholder="Búsqueda de usuarios" onIonChange={(e: CustomEvent) => setSearchText(e.detail.value!)}/>
            <IonContent className="my-custom-content">
            {
                downloading || searching || isBusy ?
                <CustomLoadingPage type={LoadingType.SearchFriends} />
                : (
                    users.length === 0 
                    ? 
                        (
                            <React.Fragment>
                                {recoverFriendsError ? <span>{recoverFriendsError.message}</span> : null}
                                {
                                searchText === null || searchText === "" ?
                                    friends.length > 0 ?
                                        friends.map((friend:any) => {
                                            return <Friend handleDeleteFriend={handleDeleteFriend} key={friend.id} friend={friend}/>
                                        })
                                    :
                                        <div className="center-empty-friends-div">
                                            <CustomAnimation json={friendsAnimation} loop={false}/>
                                            <IonText className="format-text-notifications">No tienes amigos agregados todavia</IonText>
                                        </div>
                                :
                                    <div className="center-empty-search-div">
                                        <CustomAnimation json={noFriendsAnimation} loop={false}/>
                                        <IonText className="format-text-notifications">No existe ese usuario</IonText>
                                    </div>

                                }
                            </React.Fragment>
                        )
                    : users!.filter((currentUser:any) => user.identityId !== currentUser.id)
                        .map((user:any) => {
                            let friend: any = null;
                            friends.forEach((currentFriend: any) => {
                                if (currentFriend.originalId === user.id) friend = currentFriend;
                            })
                            if (friend)
                                return <Friend handleDeleteFriend={handleDeleteFriend} key={friend.id} friend={friend}/>
                            else
                                return <UserSearch hasUserImage={keyList.findIndex((item: any) => item.key === user.id) !== -1} handleSendPetition={generateFriendPetition} key={user.id} friend={user}/>
                    }) 
                )
            }
            {
                errorPetition ?
                <IonToast
                    isOpen={showToast}
                    onDidDismiss={() => {
                        setShowToast(false);
                        setErrorPetition(false);
                    }}
                    message={messageError}
                    position="top"
                    cssClass="my-custom-error-toast"
                    duration={600}
                /> :
                <IonToast
                    isOpen={showToast}
                    onDidDismiss={() => setShowToast(false)}
                    message="Petición enviada."
                    position="top"
                    cssClass="my-custom-toast"
                    duration={600}
                />
            }
            </IonContent>
        </IonPage>
    );
}
 
export default Friends;