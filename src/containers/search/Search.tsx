import React, { useState, useEffect } from 'react';
import { IonPage, IonContent, IonToast } from '@ionic/react';
import ToolbarSearch from '../../components/ToolBarSearch/ToolBarSearch';
import UserSearch from '../../components/UserSearch/UserSearch';
import * as Mutations from '../../graphql/mutations';
import * as Queries from '../../graphql/queries';
import {API, graphqlOperation} from 'aws-amplify';
import CustomSpinner from '../../components/CustomSpinner/CustomSpinner';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import './Search.scss';

const Search: React.FC = () => {

    const currentUser = useSelector((state: RootState) => state.AuthReducer.user);
    const [searchText, setSearchText] = useState<String>();
    const [searching, setSearching] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const [errorPetition, setErrorPetition] = useState(false);
    const [messageError, setMessageError] = useState("");
    const [users, setUsers] = useState([]);

    const notifications = useSelector((state: RootState) => state.NotificationReducer.notifications);
    const friends = useSelector((state: RootState) => state.FriendReducer.friends);


    //Revisa si ya hay notificacion pendiente del usuario para ver si puede enviar otra mas
    const checkNotificationConditions = (friendId: String) => {
        if (notifications.filter((notification: any) => notification.from.id === friendId).length > 0) {
            setMessageError("Ya tienes una petición de este usuario.");
            setErrorPetition(true);
            setShowToast(true);
            return false;
        } else if (friends.filter((friend:any) => friend.id === friendId+currentUser.identityId).length > 0) {
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
                id: friendId+currentUser.identityId, 
                friendRequestToId: friendId, 
                friendRequestFromId: currentUser.identityId
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

    useEffect(() => {
        if (searchText) 
            searchUsers(searchText.toLowerCase()!)
        else
            setUsers([])
    }, [searchText]);

    return (
        <IonPage>
            <ToolbarSearch result={setSearchText}/>
                <IonContent className="my-custom-content">
            {
                searching ? 
                    <CustomSpinner /> 
                :              
                    users!.filter((user:any) => currentUser.identityId !== user.id).map((user:any) => <UserSearch handleSendPetition={generateFriendPetition} key={user.id} friend={user}/>)           
            }
            </IonContent>
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
        </IonPage>
    );
}

export default Search;