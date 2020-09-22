import React from 'react';
import { IonPopover, IonProgressBar, IonText } from '@ionic/react';

interface props {
    uploading: boolean;
    loadedFile: number;
    totalFile: number;
    showProgressBar: boolean;
}

const Popover: React.FC<props> = props => {
    return (
        <IonPopover
            isOpen={props.uploading}
            cssClass='my-custom-class'
        >
            <IonText>{Math.floor((props.loadedFile/props.totalFile)*100)}%</IonText>
            {
                (props.showProgressBar) ? <IonProgressBar value={props.loadedFile/props.totalFile}></IonProgressBar> : null
            }
        </IonPopover>
    );
}

export default Popover;