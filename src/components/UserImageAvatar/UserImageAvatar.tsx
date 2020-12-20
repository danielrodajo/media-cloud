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
            <IonImg className={!(props.urlImage !== null && props.urlImage.length > 0) || errorloading ? "hide-img" : ""} onIonImgDidLoad={e => setErrorLoading(false)} onIonError={(e) => setErrorLoading(true)} src={props.urlImage} />  
            <IonImg className={!(props.urlImage !== null && props.urlImage.length > 0) || errorloading ? "" : "hide-img"} src={DefaultAvatar}/>
        </IonAvatar>
     );
}
 
export default UserImageAvatar;