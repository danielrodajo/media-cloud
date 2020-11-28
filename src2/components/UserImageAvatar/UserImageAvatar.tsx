import React, { useState } from 'react';
import './UserImageAvatar.scss';
import { IonAvatar, IonImg } from '@ionic/react';
import DefaultAvatar from '../../default-images/default-avatar.png';

export interface UserImageAvatarProps {
    urlImage: string,
}
 
const UserImageAvatar: React.FC<UserImageAvatarProps> = props => {
    const [errorloading, setErrorLoading] = useState(false);
    
    return ( 
        <IonAvatar slot="start">
            <IonImg className={errorloading && props.urlImage.length === 0 ? "hide-img" : ""} onIonError={() => setErrorLoading(true)} src={props.urlImage} />  
            <IonImg className={errorloading && props.urlImage.length === 0 ? "" : "hide-img"} src={DefaultAvatar}/>
        </IonAvatar>
     );
}
 
export default UserImageAvatar;