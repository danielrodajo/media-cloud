import React, { useState } from 'react';
import './FileBox.scss';
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardContent, IonImg, IonRippleEffect, IonSpinner, IonIcon, IonItem } from '@ionic/react';
import PopoverFileBox from '../PopoverFileBox/PopoverFileBox';
import { formatDisplayImage } from '../../shared/utility';
import { File } from '../../store/types';
import { shareSocialSharp, folder } from 'ionicons/icons';

interface props {
    file: File,
    remove: (value: string) => void,
    removeError: Error,
    isAbsolutePath: boolean,
}

const FileBox: React.FC<props> = props => {

    const [showPopover, setShowPopover] = useState(false);
    const [loading, setLoading] = useState(true);
    
    const numberOfFolders = () => {
        if (!props.file.key.startsWith("/"))
            return [];
        else {
            const slice = props.file.key.split("/");
            const result = [];
            for (var i=0; i<slice.length-2; i++) result.push(i);
            return result;
        }
    }


    return (
        <React.Fragment>
            <PopoverFileBox remove={props.remove} removeError={props.removeError}  showPopover={showPopover} setShowPopover={setShowPopover} file={props.file}/>
            <IonCard className="my-card ion-activatable ripple-parent" onClick={() => setShowPopover(true)}>
                {
                    props.file.shared ? <IonIcon className="file-box-share-icon" icon={shareSocialSharp} color="success"/> : null
                }
                {
                    props.isAbsolutePath ? null
                    : 
                        numberOfFolders().length > 0 ?
                        <IonItem lines="none" className="file-box-folder-icon">
                        {
                            numberOfFolders().map(() => <IonIcon icon={folder} />)
                        }
                        </IonItem>
                        : null
                }
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

export default FileBox;