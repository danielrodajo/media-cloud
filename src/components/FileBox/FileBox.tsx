import React, { useState } from 'react';
import './FileBox.scss';
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardContent, IonRippleEffect, IonIcon, IonItem } from '@ionic/react';
import PopoverFileBox from '../PopoverFileBox/PopoverFileBox';
import { File } from '../../store/types';
import { shareSocialSharp, folder } from 'ionicons/icons';
import DisplayImage from '../DisplayImage/DisplayImage';

interface props {
    file: File,
    remove: (value: string) => void,
    isAbsolutePath: boolean,
}

const FileBox: React.FC<props> = props => {

    const [showPopover, setShowPopover] = useState(false);
    
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
            <PopoverFileBox remove={props.remove}  showPopover={showPopover} setShowPopover={setShowPopover} file={props.file}/>
            <IonCard className="my-card ion-activatable ripple-parent" onClick={() => setShowPopover(true)}>
                {
                    props.file.shared ? <IonIcon className="file-box-share-icon" icon={shareSocialSharp} color="success"/> : null
                }
                {
                    props.isAbsolutePath ? null
                    : (
                        numberOfFolders().length > 0 ?
                        <IonItem lines="none" className="file-box-input-folder-icon">
                        {
                            numberOfFolders().map((i) => <IonIcon key={i} icon={folder} />)
                        }
                        </IonItem>
                        : null
                    )
                }
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

export default FileBox;