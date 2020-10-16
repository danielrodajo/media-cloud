import React from 'react';
import { IonAvatar, IonLabel, IonItem, IonImg } from '@ionic/react';

interface props {
    name: String
}

const UserSearch: React.FC<props> = props => {

    return (
        <IonItem>
            <IonAvatar slot="start">
                <IonImg src="http://www.gravatar.com/avatar/?d=mp" />
            </IonAvatar>
            <IonLabel>{props.name}</IonLabel>
        </IonItem>
    );
}

export default UserSearch;