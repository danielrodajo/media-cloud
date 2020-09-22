import React from 'react';
import { IonItem, IonLabel, IonIcon, IonText } from '@ionic/react';

interface props {
    icon: string;
    onClick: () => void;
}

const UploadButton: React.FC<props> = props => {
    return (
        <IonItem button className="ion-text-center" lines="none" onClick={props.onClick}>
            <IonLabel>
                <IonIcon size="large" icon={props.icon} />
                <IonText>
                    {props.children}
                </IonText>
            </IonLabel>
        </IonItem>  
    );
}

export default UploadButton;