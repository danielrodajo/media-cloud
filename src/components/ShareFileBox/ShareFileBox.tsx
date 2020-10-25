import React, { useState } from 'react';
import './ShareFileBox.scss';
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardContent, IonImg, IonRippleEffect, IonSpinner } from '@ionic/react';
import { formatDisplayImage } from '../../shared/utility';
import { File } from '../../store/types';
import PopoverShareFileBox from '../PopoverShareFileBox/PopoverShareFileBox';

interface props {
    file: File;
}

const ShareFileBox: React.FC<props> = props => {

    const [showPopover, setShowPopover] = useState(false);
    const [loading, setLoading] = useState(true);
    
    return (
        <React.Fragment>
            <PopoverShareFileBox showPopover={showPopover} setShowPopover={setShowPopover} file={props.file}/>
            <IonCard className="my-card ion-activatable ripple-parent" onClick={() => setShowPopover(true)}>
                <IonCardHeader>
                    <IonSpinner color="tertiary" className={!loading ? "hide-img" : "default-spinner"} />
                    <IonImg className={loading ? "hide-img" : "default-img"} onIonImgDidLoad={() => setLoading(false)} onIonError={() => {console.log("ERROR CARGANDO"); setLoading(false);}} 
                     src={formatDisplayImage(props.file.name, props.file.url)} />  
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