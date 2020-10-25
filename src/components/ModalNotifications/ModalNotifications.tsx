import React from 'react';
import './ModalNotifications.scss';
import { IonModal, IonContent, IonHeader, IonToolbar, IonIcon, IonItem, IonText } from '@ionic/react';
import { arrowDown } from 'ionicons/icons';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import Notification from './Notification/Notification';
import { API, graphqlOperation } from 'aws-amplify';
import * as Mutations from '../../graphql/mutations';
import * as actions from "../../store/actions/index";

export interface Props {
    showModal: boolean;
    setShowModal: (show: boolean) => void
}
 
const ModalNotifications: React.SFC<Props> = props => {

    const dispatch = useDispatch();

    const deleteNotification = (notifId: string) => dispatch(actions.deleteNotification(notifId));

    const notifications = useSelector((state: RootState) => state.NotificationReducer.notifications);

    const handleDenyPetition = (notificationId: string) => {
        (API.graphql(graphqlOperation(Mutations.deleteFriendRequest, {input: {id: notificationId}})) as Promise<any>)
        .then(e => {
            deleteNotification(notificationId);
        })
    }

    const addFriend = (friend: any) => dispatch(actions.addFriend(friend));
    
    const handleCheckPetition = (notification: any) => {
        //Puesto que GraphQL no admite de momento relaciones a sí mismas, se tiene que crear una entidad Friend secundaria para hacer este proceso
        //Primero se crea un amigo de A a B
        (API.graphql(graphqlOperation(Mutations.createFriend, {input: {friendUserId: notification.from.id, id: notification.to.id+notification.from.id, name: notification.to.name, originalId: notification.to.id}})) as Promise<any>)
        .then((e:any) => {
            //Se crea el amigo de B a A
            (API.graphql(graphqlOperation(Mutations.createFriend, {input: {friendUserId: notification.to.id, id: notification.from.id+notification.to.id, name: notification.from.name, originalId: notification.from.id}})) as Promise<any>)
            .then((e:any) => {
                //Agregamos localmente el nuevo amigo
                addFriend({
                    id: notification.from.id,
                    name: notification.from.name
                });
                //Finalmente, se hace el mismo proceso de "denegarla" (eliminarla de la store de Redux y checkearla)
                handleDenyPetition(notification.id);
            })
        })   
    }

    return (
        <IonModal isOpen={props.showModal} onDidDismiss={e => props.setShowModal(false)}>
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
                    notifications.map((notification: any) => <Notification key={notification.id} notification={notification} handleCheckPetition={handleCheckPetition} handleDenyPetition={handleDenyPetition}/>) 
                : 
                    <IonText className="no-notifications-text">No tienes notificaciones pendientes.</IonText>
            }
            </IonContent>
        </IonModal>
    );
}
 
export default ModalNotifications;