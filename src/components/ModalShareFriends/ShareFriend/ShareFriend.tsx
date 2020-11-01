import React, { useState } from 'react';
import './ShareFriend';
import { IonItem, IonLabel, IonToggle } from '@ionic/react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import UserImageAvatar from '../../../UserImageAvatar/UserImageAvatar';

export interface ShareFriendProps {
    friend: any,
    file: any,
    shared: boolean,
    handleShare: (fileId: String, friendId: String, checked: boolean) => void,
}
 
const ShareFriend: React.SFC<ShareFriendProps> = props => {

    const sharingFileToUser = useSelector((state: RootState) => state.ShareFileReducer.sharingToUser);
    const [checked, setChecked] = useState(props.shared);

    return (    
        <IonItem>       
            <UserImageAvatar urlImage={props.friend.userImage} />
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