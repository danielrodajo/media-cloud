import React from 'react';
import './Notification.scss'
import { IonItem, IonText, IonIcon } from '@ionic/react';
import { closeCircleOutline } from 'ionicons/icons';
import { NotificationType } from '../../../API';

export interface NotificationProps {
    notification: any,
    handleCloseNotification: (notification: any) => void,
}
 
const Notification: React.SFC<NotificationProps> = props => {

    let message = "";
    switch (props.notification.type) {
        case NotificationType.ACCEPTPETITION: 
            message = " ha aceptado tu solicitud de amistad."; break;
        case NotificationType.DENYPETITION: 
            message = " ha rechazado tu solicitud de amistad."; break;
        case NotificationType.SENDSHAREFILE: 
            message = " ha compartido un fichero contigo."; break;
        case NotificationType.STOPSENDSHAREFILE:
            message = " ya no comparte un fichero contigo."; break;
    }

    return (     
        <IonItem>
            <IonText className="hide-overflow-text custom-notification-text"><span className="custom-text">{props.notification.from.name}</span>{message}</IonText>
            <IonItem button lines="none" slot="end" className="custom-close" onClick={() => props.handleCloseNotification(props.notification)}>
                <IonIcon icon={closeCircleOutline} />
            </IonItem>
        </IonItem>
    );
}
 
export default Notification;