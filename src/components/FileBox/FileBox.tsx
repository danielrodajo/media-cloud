import React, { useState } from 'react';
import './FileBox.css';
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardContent, IonImg, IonRippleEffect } from '@ionic/react';
import PopoverFileBox from '../PopoverFileBox/PopoverFileBox';
import { formatDisplayImage } from '../../shared/utility';
import { File } from '../../store/types';

interface props {
    file: File;
    remove: (value: string) => void;
    removeError: Error
}

const FileBox: React.FC<props> = props => {

    const [showPopover, setShowPopover] = useState(false);

    return (
        <React.Fragment>
            <PopoverFileBox remove={props.remove} removeError={props.removeError}  showPopover={showPopover} setShowPopover={setShowPopover} file={props.file}/>
            <IonCard className="my-card ion-activatable ripple-parent" onClick={() => setShowPopover(true)}>
                <IonCardHeader>
                    <IonImg className="default-img" src={formatDisplayImage(props.file.name, props.file.url)} />  
                </IonCardHeader>

                <IonCardContent>
                    <IonCardSubtitle className="ion-text-center">
                    {
                        (props.file.name.length > 17) ? props.file.name.substring(0,14)+"..." : props.file.name
                    }
                    </IonCardSubtitle>
                </IonCardContent>
                <IonRippleEffect type="unbounded"></IonRippleEffect>
            </IonCard>
        </React.Fragment>
    );
}

export default FileBox;