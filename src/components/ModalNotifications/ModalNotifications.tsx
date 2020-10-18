import React from 'react';
import './ModalNotifications.scss';
import { IonModal, IonContent, IonHeader, IonToolbar, IonIcon, IonItem, IonText } from '@ionic/react';
import { arrowDown } from 'ionicons/icons';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import Notification from './Notification/Notification';

export interface Props {
    showModal: boolean;
    setShowModal: (show: boolean) => void
}
 
const ModalNotifications: React.SFC<Props> = props => {

    const notifications = useSelector((state: RootState) => state.NotificationReducer.notifications);

    const handleCheckPetition = () => {}
    const handleDenyPetition = () => {}

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
                    notifications.map((notification: any) => <Notification notification={notification} handleCheckPetition={handleCheckPetition} handleDenyPetition={handleDenyPetition}/>) 
                : 
                    <IonText className="no-notifications-text">No tienes notificaciones pendientes.</IonText>
            }
            </IonContent>
        </IonModal>
    );
}
 
export default ModalNotifications;