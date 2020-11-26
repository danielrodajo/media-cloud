import React, { useState } from 'react';
import './ModalNotifications.scss';
import { IonModal, IonContent, IonHeader, IonToolbar, IonIcon, IonItem, IonText } from '@ionic/react';
import { arrowDown } from 'ionicons/icons';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import Notification from './Notification/Notification';
import { API, graphqlOperation } from 'aws-amplify';
import * as Mutations from '../../graphql/mutations';
import * as actions from "../../store/actions/index";
import FriendPetition from './FriendPetition/FriendPetition';
import { NotificationType } from '../../API';
import { generateNotification } from '../../shared/utility';
import emptyFolderAnimation from '../../Animations/nonotificationsanimation.json';
import CustomLoading from '../../components/CustomLoading/CustomLoading';
import CustomAnimation from '../../components/CustomAnimation';

export interface Props {
    showModal: boolean;
    setShowModal: (show: boolean) => void
}
 
const ModalNotifications: React.SFC<Props> = props => {

    const dispatch = useDispatch();

    const user = useSelector((state: RootState) => state.AuthReducer.user);

    const deleteNotification = (notifId: string) => dispatch(actions.deleteNotification(notifId));

    const notifications = useSelector((state: RootState) => state.NotificationReducer.notifications);

    const [uploading, setUploading] = useState(false);

    const handleCloseNotification = (notification: any) => {
        (API.graphql(graphqlOperation(Mutations.deleteFriendRequest, {input: {id: notification.id}})) as Promise<any>)
        .then(e => {
            deleteNotification(notification.id);
        })
        .catch(err => console.log(err))
    }

    const handleDenyNotification = (notification: any) => {
        (API.graphql(graphqlOperation(Mutations.deleteFriendRequest, {input: {id: notification.id}})) as Promise<any>)
        .then(e => {
            //Reenviamos peticion al otro usuario de que hemos denegado la peticion
            generateNotification(user.identityId, notification.from.id, NotificationType.DENYPETITION);
            deleteNotification(notification.id);
        })
    }

    const addFriend = (friend: any) => dispatch(actions.addFriend(friend));
    
    const handleCheckPetition = (notification: any) => {
        console.log(notification);
        setUploading(true);
        //Puesto que GraphQL no admite de momento relaciones a sí mismas, se tiene que crear una entidad Friend secundaria para hacer este proceso
        //Primero se crea un amigo de A a B
        (API.graphql(graphqlOperation(Mutations.createFriend, {input: {friendUserId: notification.from.id, id: notification.to.id+notification.from.id, friendOriginalUserId: notification.to.id}})) as Promise<any>)
        .then((e:any) => {
            //Se crea el amigo de B a A
            (API.graphql(graphqlOperation(Mutations.createFriend, {input: {friendUserId: notification.to.id, id: notification.from.id+notification.to.id, friendOriginalUserId: notification.from.id}})) as Promise<any>)
            .then((e:any) => {
                //Agregamos localmente el nuevo amigo
                addFriend({
                    id: notification.from.id,
                    name: notification.from.name
                });

                //Reenviamos peticion al otro usuario de que hemos aceptado la peticion
                generateNotification(user.identityId, notification.from.id, NotificationType.ACCEPTPETITION);
                //Finalmente, se hace el mismo proceso de "denegarla" (eliminarla de la store de Redux y checkearla)
                handleCloseNotification(notification);

                setUploading(false);
            })
            .catch(err => {
                console.log(err);
                setUploading(false);
            });
        })   
        .catch(err => {
            console.log(err);
            setUploading(false);
        });
    }

    return (
        <IonModal isOpen={props.showModal} onDidDismiss={e => props.setShowModal(false)}>
            {uploading ? <CustomLoading showLoading={uploading}/> : null}
            <IonHeader>
                <IonToolbar className="vertical-align">
                    <IonText className="custom-title">
                        Notificaciones
                    </IonText>
                    <IonItem button className="custom-button" lines="none" onClick={e => props.setShowModal(false)}>
                        <IonIcon icon={arrowDown} />
                    </IonItem>
                </IonToolbar>
            </IonHeader>
            <IonContent>
            {
                (notifications && notifications.length > 0) ?
                    notifications.map((notification: any) => {
                    switch (notification.type) {
                        case NotificationType.SENDPETITION: 
                            return <FriendPetition hasUserImage={true} key={notification.id} notification={notification} handleCheckPetition={handleCheckPetition} handleDenyPetition={handleDenyNotification}/>;
                        default:
                            return <Notification hasUserImage={true} key={notification.id} notification={notification} handleCloseNotification={handleCloseNotification}/>
                    }             
                }) 
                : 
                    <div className="center-empty-notifications-div">
                        <CustomAnimation json={emptyFolderAnimation} loop={true}/>
                        <IonText className="format-text-notifications">No tienes notificaciones pendientes.</IonText>
                    </div>
            }
            </IonContent>
        </IonModal>
    );
}
 
export default ModalNotifications;