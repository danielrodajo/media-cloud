import React from 'react';
import { IonPopover } from '@ionic/react';
import './PopoverUpload.scss';
import 'react-circular-progressbar/dist/styles.css';
import LoadingAnimation from '../../../components/Animations/LoadingAnimation/LoadingAnimation';
import DoneAnimation from '../../../components/Animations/DoneAnimation/DoneAnimation';

interface props {
    uploading: boolean;
    loadedFile: number;
    totalFile: number;
    success: boolean;
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
            ? <LoadingAnimation/>
            : <DoneAnimation/>
        }
        </IonPopover>
    )
};

export default Popover;