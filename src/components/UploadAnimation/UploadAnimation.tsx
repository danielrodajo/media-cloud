import React from 'react';
import './UploadAnimation.scss';
import LoadingAnimation from '../../components/Animations/LoadingAnimation/LoadingAnimation';
import { IonText } from '@ionic/react';

export interface UploadAnimationProps {
    percent: number
}
 
const UploadAnimation: React.SFC<UploadAnimationProps> = props => {
    return ( 
        <React.Fragment>
            <div className="center-percent">
                <IonText className="format-percent">{props.percent}%</IonText>
            </div>      
            <LoadingAnimation/>
            <IonText className="format-text">Subiendo</IonText>
        </React.Fragment>
     );
}
 
export default UploadAnimation;