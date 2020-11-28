import React, { useState } from 'react';
import './ShareFileBox.scss';
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardContent, IonRippleEffect } from '@ionic/react';
import { File } from '../../store/types';
import PopoverShareFileBox from '../PopoverShareFileBox/PopoverShareFileBox';
import DisplayImage from '../DisplayImage/DisplayImage';

interface props {
    file: File;
}

const ShareFileBox: React.FC<props> = props => {

    const [showPopover, setShowPopover] = useState(false);
    
    return (
        <React.Fragment>
            <PopoverShareFileBox showPopover={showPopover} setShowPopover={setShowPopover} file={props.file}/>
            <IonCard className="my-card ion-activatable ripple-parent" onClick={() => setShowPopover(true)}>
                <IonCardHeader>
                    <DisplayImage file={props.file} isPopover={false}/>
                </IonCardHeader>

                <IonCardContent>
                    <IonCardSubtitle className="ion-text-center hide-overflow-text">
                        {props.file.name}
                    </IonCardSubtitle>
                </IonCardContent>
                <IonRippleEffect type="unbounded"></IonRippleEffect>
            </IonCard>
        </React.Fragment>
    );
}

export default ShareFileBox;