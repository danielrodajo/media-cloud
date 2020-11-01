import React, { useEffect, useState } from 'react';
import './Notification.scss'
import { IonItem, IonText, IonIcon, IonGrid, IonRow, IonCol } from '@ionic/react';
import { closeCircleOutline, closeSharp } from 'ionicons/icons';
import { NotificationType } from '../../../API';
import UserImageAvatar from '../../../UserImageAvatar/UserImageAvatar';
import { Storage } from 'aws-amplify';
import { parseDate } from '../../../shared/utility';

export interface NotificationProps {
    notification: any,
    handleCloseNotification: (notification: any) => void,
    hasUserImage: boolean,
}
 
const Notification: React.FC<NotificationProps> = props => {

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

    let title = "";
    switch (props.notification.type) {
        case NotificationType.ACCEPTPETITION: 
            title = "Petición aceptada"; break;
        case NotificationType.DENYPETITION: 
            title = "Petición rechazada"; break;
        case NotificationType.SENDSHAREFILE: 
            title = "Fichero compartido"; break;
        case NotificationType.STOPSENDSHAREFILE:
            title = "Fichero descompartido"; break;
    }

    const [userImage, setUserImage] = useState("");

    useEffect(() => {
        if (props.hasUserImage) {
            Storage.get(props.notification.from.id, {level: 'public'})
            .then((result: any) => {
                setUserImage(result);
            })
            .catch(err => console.log(err))
        }
    });



    return (     
        <IonItem style={{"position": "relative"}}>
            <UserImageAvatar urlImage={userImage}/>
            <IonGrid>
                <IonRow>
                    <IonCol>
                        <IonText className="custom-notification-title">{title}</IonText>
                        <br/>
                        <IonText className="custom-notification-text"><span className="custom-text">{props.notification.from.name}</span>{message}</IonText>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        <IonText className="custom-parse-notification-date">{parseDate(props.notification.createdOn)}</IonText>
                    </IonCol>
                </IonRow>
            </IonGrid>
            <IonItem button lines="none" className="custom-close" onClick={() => props.handleCloseNotification(props.notification)}>
                <IonIcon icon={closeSharp} />
            </IonItem>    
        </IonItem>
    );
}
 
export default Notification;