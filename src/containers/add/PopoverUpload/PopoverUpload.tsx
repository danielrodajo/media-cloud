import React from 'react';
import { IonPopover } from '@ionic/react';
import './PopoverUpload.scss';
import 'react-circular-progressbar/dist/styles.css';
import UploadAnimation from '../../../components/UploadAnimationWithPercent/UploadAnimationWithPercent';
import DoneBoxAnimation from '../../../components/DoneBoxAnimation/DoneBoxAnimation';

interface props {
    uploading: boolean;
    loadedFile: number;
    totalFile: number;
    success: boolean;
    text: string
}

const Popover: React.FC<props> = props => {

    return(
        <IonPopover
            isOpen={props.uploading}
            backdropDismiss={false}
            cssClass='my-custom-popover-upload-class'
        >
        {
            (!props.success) 
            ? <UploadAnimation text={props.text} percent={Math.floor((props.loadedFile/props.totalFile)*100)}/>
            : <DoneBoxAnimation />
        }
        </IonPopover>
    )
};

export default Popover;