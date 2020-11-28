import React from 'react';
import './CustomLoading.scss';
import { IonLoading } from '@ionic/react';

export interface AuthLoadingProps {
    showLoading: boolean,
}
 
const CustomLoading: React.SFC<AuthLoadingProps> = props => {
    return (
        <IonLoading
        cssClass='my-custom-class'
        isOpen={props.showLoading}
        message={'Por favor, espera...'}
        duration={10000}
      />
    );
}
 
export default CustomLoading;