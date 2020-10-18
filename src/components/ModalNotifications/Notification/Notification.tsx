import React from 'react';
import './Notification.scss'
import { IonItem, IonText, IonIcon } from '@ionic/react';
import { checkmarkCircleOutline, closeCircleOutline } from 'ionicons/icons';

export interface NotificationProps {
    notification: any,
    handleCheckPetition: (notification: any) => void,
    handleDenyPetition: (notificationId: string) => void
}
 
const Notification: React.SFC<NotificationProps> = props => {
    return (     
    <IonItem>
        <IonText><span className="custom-text">{props.notification.from.name}</span> te ha enviado una petición de amistad.</IonText>
        <IonItem lines="none" className="custom-notification-icon custom-notification-check" onClick={() => props.handleCheckPetition(props.notification)}>
            <IonIcon icon={checkmarkCircleOutline} />
        </IonItem>
        <IonItem lines="none" className="custom-notification-icon custom-notification-close" onClick={() => props.handleDenyPetition(props.notification.id)}>
            <IonIcon icon={closeCircleOutline} />
        </IonItem>
    </IonItem>
    );
}
 
export default Notification;