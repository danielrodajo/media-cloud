import React, { useState } from 'react';
import './ShareFriend';
import { IonItem, IonAvatar, IonImg, IonLabel, IonToggle } from '@ionic/react';
import DefaultAvatar from '../../../default-images/default-avatar.png';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';

export interface ShareFriendProps {
    friend: any,
    file: any,
    shared: boolean,
    handleShare: (fileId: String, friendId: String, checked: boolean) => void,
}
 
const ShareFriend: React.SFC<ShareFriendProps> = props => {

    const [errorUserImage, setErrorUserImage] = useState(false);
    const sharingFileToUser = useSelector((state: RootState) => state.ShareFileReducer.sharingToUser);
    const [checked, setChecked] = useState(props.shared);

    return (    
        <IonItem>       
            <IonAvatar slot="start">
                <IonImg src={!errorUserImage ? props.friend.userImage : DefaultAvatar} alt="user" onIonError={() => {
                    setErrorUserImage(true)
                    console.log("ERROR")
                }}/>
            </IonAvatar>
            <IonLabel>{props.friend.name}</IonLabel>   
            <IonToggle slot="end" name="sharedButton" checked={checked} disabled={sharingFileToUser} onIonChange={() => {
                    setChecked(!checked);
                    props.handleShare(props.file.key, props.friend.originalId, checked);
                }}
            />
        </IonItem>
    );
}
 
export default ShareFriend;