import React, { useState } from 'react';
import './FileBox.css';
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardContent, IonImg, IonRippleEffect } from '@ionic/react';
import PopoverFileBox from '../PopoverFileBox/PopoverFileBox';
import { formatDisplayImage } from '../../shared/utility';

interface props {
    src: string;
    name: string;
    remove: (value: string) => void;
    removeError: Error
}

const FileBox: React.FC<props> = props => {

    const [showPopover, setShowPopover] = useState(false);
    return (
        <React.Fragment>
            <PopoverFileBox remove={props.remove} removeError={props.removeError}  showPopover={showPopover} setShowPopover={setShowPopover} src={props.src} name={props.name}/>
            <IonCard className="card ion-activatable ripple-parent" onClick={() => setShowPopover(true)}>
                <IonCardHeader>
                    <IonImg className="default-img" src={formatDisplayImage(props.name, props.src)} />
                </IonCardHeader>

                <IonCardContent>
                    <IonCardSubtitle className="ion-text-center">
                    {
                        (props.name.length > 17) ? props.name.substring(0,14)+"..." : props.name
                    }
                    </IonCardSubtitle>
                </IonCardContent>
                <IonRippleEffect type="unbounded"></IonRippleEffect>
            </IonCard>
        </React.Fragment>
    );
}

export default FileBox;