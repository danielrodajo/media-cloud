import React from 'react';
import './FriendPetition.scss'
import { IonItem, IonText, IonIcon } from '@ionic/react';
import { checkmarkCircleOutline, closeCircleOutline } from 'ionicons/icons';

export interface FriendPetitionProps {
    notification: any,
    handleCheckPetition: (notification: any) => void,
    handleDenyPetition: (notification: any) => void
}
 
const FriendPetition: React.SFC<FriendPetitionProps> = props => {
    return (     
    <IonItem>
        <IonText><span className="custom-text">{props.notification.from.name}</span> te ha enviado una petición de amistad.</IonText>
        <IonItem button lines="none" className="custom-notification-icon custom-notification-check" onClick={() => props.handleCheckPetition(props.notification)}>
            <IonIcon icon={checkmarkCircleOutline} />
        </IonItem>
        <IonItem button lines="none" className="custom-notification-icon custom-notification-close" onClick={() => props.handleDenyPetition(props.notification)}>
            <IonIcon icon={closeCircleOutline} />
        </IonItem>
    </IonItem>
    );
}
 
export default FriendPetition;