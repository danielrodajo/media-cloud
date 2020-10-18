import React from 'react';
import './Friend.scss';
import { IonItem, IonAvatar, IonLabel, IonImg } from '@ionic/react';
import DefaultAvatar from '../../default-images/default-avatar.png';

export interface FriendProps {
    friend: any
}
 
const Friend: React.SFC<FriendProps> = props => {
    return (
        <IonItem>       
            <IonAvatar slot="start">
                    <IonImg src={DefaultAvatar} />
                </IonAvatar>
                <IonLabel>{props.friend.name}</IonLabel>
        </IonItem>
    );
}
 
export default Friend;