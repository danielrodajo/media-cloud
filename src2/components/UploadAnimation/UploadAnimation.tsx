import React from 'react';
import './UploadAnimation.scss';
import { IonText } from '@ionic/react';
import loadingAnimation from '../../Animations/loadinganimation.json';
import CustomAnimation from '../CustomAnimation';

export interface UploadAnimationProps {
    text: string
}
 
const UploadAnimation: React.SFC<UploadAnimationProps> = props => {
    return ( 
        <React.Fragment>  
            <CustomAnimation json={loadingAnimation} loop={true}/>
            <IonText className="format-text">{props.text}</IonText>
        </React.Fragment>
     );
}
 
export default UploadAnimation;