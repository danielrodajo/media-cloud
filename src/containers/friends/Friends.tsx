import React, { useEffect, useCallback, useState } from 'react';
import './Friends.scss';
import { IonPage, IonContent, IonText, IonItem, IonSearchbar, IonToast } from '@ionic/react';
import Toolbar from '../../components/ToolBar/Toolbar';
import CustomSpinner from '../../components/CustomSpinner/CustomSpinner';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../store/actions/index';
import { RootState } from '../../store/store';
import Friend from '../../components/Friend/Friend';
import { API, graphqlOperation } from 'aws-amplify';
import * as Mutations from '../../graphql/mutations';
import * as Queries from '../../graphql/queries';
import UserSearch from '../../components/UserSearch/UserSearch';

export interface FriendsProps {
    
}
 
const Friends: React.SFC<FriendsProps> = () => {

    const dispatch = useDispatch();

    const user = useSelector((state: RootState) => state.AuthReducer.user);

    const downloading = useSelector((state: RootState) => state.FriendReducer.downloadingFriends);

    const onGetFriends = useCallback((userId: string) => dispatch(actions.getFriends(userId)), [dispatch]);

    const friends = useSelector((state: RootState) => state.FriendReducer.friends);

    const notifications = useSelector((state: RootState) => state.NotificationReducer.notifications);

    const recoverFriendsError = useSelector((state: RootState) => state.FriendReducer.recoverFriendsError);

    const deleteFriend = (friendId: string) => dispatch(actions.deleteFriend(friendId));
    
    const [searchText, setSearchText] = useState<String>();
    const [searching, setSearching] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const [errorPetition, setErrorPetition] = useState(false);
    const [messageError, setMessageError] = useState("");
    const [users, setUsers] = useState([]);

    const handleDeleteFriend = (friendId: string) => {
        (API.graphql(graphqlOperation(Mutations.deleteFriend, {input: {id: friendId}})) as Promise<any>)
        .then(() => (
            API.graphql(graphqlOperation(Mutations.deleteFriend, {input: {id: user.identityId}})) as Promise<any>)
            .then(() => {
                deleteFriend(friendId);
            })
        ).catch(err => console.log(err))
    }

    useEffect(() => {
        onGetFriends(user.identityId);
    }, [user.identityId, onGetFriends])

    useEffect(() => {
        if (searchText) 
            searchUsers(searchText.toLowerCase()!)
        else
            setUsers([])
    }, [searchText]);

    //Revisa si ya hay notificacion pendiente del usuario para ver si puede enviar otra mas
    const checkNotificationConditions = (friendId: String) => {
        if (notifications.filter((notification: any) => notification.from.id === friendId).length > 0) {
            setMessageError("Ya tienes una petición de este usuario.");
            setErrorPetition(true);
            setShowToast(true);
            return false;
        } else if (friends.filter((friend:any) => friend.id === friendId+user.identityId).length > 0) {
            setMessageError("Ya está agregado.");
            setErrorPetition(true);
            setShowToast(true);
            return false;
        }
        return true;
    }

    const generateFriendPetition = async (friendId: String) => {
        if (checkNotificationConditions(friendId)) {   
            const friendRequestDetails = {
                id: friendId+user.identityId, 
                friendRequestToId: friendId, 
                friendRequestFromId: user.identityId
            }
            await (API.graphql(graphqlOperation(Mutations.createFriendRequest, {input: friendRequestDetails})) as Promise<any>)
            .then(e => {
                setShowToast(true);
            })
            .catch(err => {
                if (err.errors[0].errorType === "DynamoDB:ConditionalCheckFailedException")
                    setMessageError("Ya le has enviado una petición.");
                else
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
                },
                limit: 10
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
            <Toolbar />
            <IonSearchbar className="custom-ion-search-bar-friends" placeholder="Búsqueda de usuarios" onIonChange={(e: CustomEvent) => setSearchText(e.detail.value!)}/>
            <IonContent className="my-custom-content">
            {
                downloading || searching ?
                <CustomSpinner />
                : (
                    users.length === 0 
                    ? (
                        <React.Fragment>
                            {recoverFriendsError ? <span>{recoverFriendsError.message}</span> : null}
                            {
                                friends.length > 0 ?
                                friends.map((friend:any) => <Friend handleDeleteFriend={handleDeleteFriend} key={friend.id} friend={friend}/>)
                                :
                                <IonText>No tienes contactos agregados.</IonText>
                            }
                        </React.Fragment>
                    )
                    : users!.filter((currentUser:any) => user.identityId !== currentUser.id).map((user:any) => {
                        let friend: any = null;
                        friends.forEach((currentFriend: any) => {
                            if (currentFriend.originalId === user.id) friend = currentFriend;
                        });
                        if (friend)
                            return <Friend handleDeleteFriend={handleDeleteFriend} key={friend.id} friend={friend}/>;
                        else
                            return <UserSearch handleSendPetition={generateFriendPetition} key={user.id} friend={user}/>
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