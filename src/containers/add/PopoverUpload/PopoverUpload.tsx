import React from 'react';
import { IonPopover } from '@ionic/react';
import './PopoverUpload.scss';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import AnimatedCheckmark from '../../../components/AnimatedCheckmark/AnimatedCheckmark';

interface props {
    uploading: boolean;
    loadedFile: number;
    totalFile: number;
    success: boolean;
}

const Popover: React.FC<props> = props => (
    <IonPopover
        isOpen={props.uploading}
        backdropDismiss={false}
        cssClass='my-custom-popover-upload-class'
    >
    {
        (!props.success) 
        ? <CircularProgressbar value={props.loadedFile/props.totalFile} maxValue={1} text={Math.floor((props.loadedFile/props.totalFile)*100)+"%"}  background={true} styles={{background: {fill: '#ffffff'}}}/> 
        : <AnimatedCheckmark />
    }
    </IonPopover>
);

export default Popover;