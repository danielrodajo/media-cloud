import React from 'react';
import './AuthLoading.scss';
import { IonLoading } from '@ionic/react';

export interface AuthLoadingProps {
    showLoading: boolean,
}
 
const AuthLoading: React.SFC<AuthLoadingProps> = props => {
    return (
        <IonLoading
        cssClass='my-custom-class'
        isOpen={props.showLoading}
        message={'Por favor, espera...'}
        duration={10000}
      />
    );
}
 
export default AuthLoading;