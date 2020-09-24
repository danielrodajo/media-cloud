import React, { useState } from 'react';
import './FolderBox.css';
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardContent, IonImg, IonRippleEffect } from '@ionic/react';
import { formatDisplayImage } from '../../shared/utility';
import { folderOutline } from 'ionicons/icons';
import PopoverFileBox from '../PopoverFileBox/PopoverFileBox';

interface props {
    src: string;
    name: string;
    remove: (value: string) => void;
    removeError: Error
}

const FolderBox: React.FC<props> = props => {

    const [showPopover, setShowPopover] = useState(false);

    //Formateamos ruta del nombre para obtener unicamente el nombre de la carpeta
    const formatName = (name: string) => {
        const slices = name.split("/");

        //Quitamos el ultimo valor que es el fichero default que se crea en todas las carpetas
        return slices[slices.length-2];
    }

    return (
        <React.Fragment>
           <PopoverFileBox remove={props.remove} removeError={props.removeError}  showPopover={showPopover} setShowPopover={setShowPopover} src={props.name} name={props.name}/>
            <IonCard className="card ion-activatable ripple-parent" onClick={() => setShowPopover(true)}>
                <IonCardHeader>
                    <IonImg className="default-img" src={folderOutline}  color="white"/>  
                </IonCardHeader>

                <IonCardContent>
                    <IonCardSubtitle className="ion-text-center">
                    {
                        (formatName(props.name).length > 17) ? formatName(props.name).substring(0,14)+"..." : formatName(props.name)
                    }
                    </IonCardSubtitle>
                </IonCardContent>
                <IonRippleEffect type="unbounded"></IonRippleEffect>
            </IonCard>
        </React.Fragment>
    );
}

export default FolderBox;