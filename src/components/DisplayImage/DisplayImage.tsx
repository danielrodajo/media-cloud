import React, { useState } from 'react';
import './DisplayImage.scss';
import { IonSpinner, IonImg } from '@ionic/react';
import { formatDisplayImage } from '../../shared/utility';
import Default from '../../default-images/default.jpg';

export interface DisplayImageProps {
    file: any,
    isPopover: boolean
}
 
const DisplayImage: React.FC<DisplayImageProps> = props => {
    
    const [loading, setLoading] = useState(true);
    const [errorloading, setErrorLoading] = useState(false);
    
    return (
        <React.Fragment>
            <IonSpinner color="tertiary" className={!loading ? "hide-img" : (props.isPopover ? "popover-spinner" :"default-spinner")} />
            <IonImg className={loading || errorloading ? "hide-img" : (props.isPopover ? "popover-img" :"default-img") } onIonImgDidLoad={() => setLoading(false)} 
            onIonError={() => {setLoading(false); setErrorLoading(true)}} 
                src={formatDisplayImage(props.file.name, props.file.url)} />  
            <IonImg className={errorloading ? (props.isPopover ? "popover-img" :"default-img") : "hide-img"} src={Default}/>
        </React.Fragment>
    );
}
 
export default DisplayImage;