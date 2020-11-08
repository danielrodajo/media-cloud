import React from 'react';
import './UploadAnimation.scss';
import { IonText } from '@ionic/react';
import loadingAnimation from '../../Animations/loadinganimation.json';
import CustomAnimation from '../CustomAnimation';

export interface UploadAnimationProps {
    percent: number,
    text: string
}
 
const UploadAnimation: React.SFC<UploadAnimationProps> = props => {
    return ( 
        <React.Fragment>
            <div className="center-percent">
                <IonText className="format-percent">{props.percent}%</IonText>
            </div>      
            <CustomAnimation json={loadingAnimation} loop={true}/>
            <IonText className="format-text">{props.text}</IonText>
        </React.Fragment>
     );
}
 
export default UploadAnimation;