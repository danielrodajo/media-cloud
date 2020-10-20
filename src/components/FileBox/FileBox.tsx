import React, { useState } from 'react';
import './FileBox.scss';
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardContent, IonImg, IonRippleEffect, IonSpinner } from '@ionic/react';
import PopoverFileBox from '../PopoverFileBox/PopoverFileBox';
import { formatDisplayImage } from '../../shared/utility';
import { File } from '../../store/types';
import DefaultFile from '../../default-images/default-file.png';

interface props {
    file: File;
    remove: (value: string) => void;
    removeError: Error
}

const FileBox: React.FC<props> = props => {

    const [showPopover, setShowPopover] = useState(false);
    const [loading, setLoading] = useState(true);

    return (
        <React.Fragment>
            <PopoverFileBox remove={props.remove} removeError={props.removeError}  showPopover={showPopover} setShowPopover={setShowPopover} file={props.file}/>
            <IonCard className="my-card ion-activatable ripple-parent" onClick={() => setShowPopover(true)}>
                <IonCardHeader>
                    <IonSpinner color="tertiary" className={!loading ? "hide-img" : "default-spinner"} />
                    <IonImg className={loading ? "hide-img" : "default-img"} onIonImgDidLoad={() => setLoading(false)} onIonError={() => {console.log("ERROR CARGANDO"); setLoading(false);}} 
                     src={formatDisplayImage(props.file.name, props.file.url)} />  
                </IonCardHeader>

                <IonCardContent>
                    <IonCardSubtitle className="ion-text-center hide-overflow-text">
                    {
                        //(props.file.name.length > 17) ? props.file.name.substring(0,14)+"..." : props.file.name
                        props.file.name
                    }
                    </IonCardSubtitle>
                </IonCardContent>
                <IonRippleEffect type="unbounded"></IonRippleEffect>
            </IonCard>
        </React.Fragment>
    );
}

export default FileBox;