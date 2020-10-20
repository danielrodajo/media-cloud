import React from 'react';
import './FolderBox.css';
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardContent, IonRippleEffect, IonIcon } from '@ionic/react';
import { folder } from 'ionicons/icons';

interface props {
    path: string;
    onClick: (path: string) => void;
}

const FolderBox: React.FC<props> = props => {

    //Formateamos ruta del nombre para obtener unicamente el nombre de la carpeta
    const formatName = (name: string) => {
        const slices = name.split("/");

        //Quitamos el ultimo valor que es el fichero default que se crea en todas las carpetas
        return slices[slices.length-2];
    }

    return (
        <React.Fragment>
           <IonCard className="my-card ion-activatable ripple-parent" onClick={(e) => props.onClick(props.path.substring(0, (props.path.length-8)))}>
                <IonCardHeader>
                    <IonIcon icon={folder} className="custom-icon" />  
                </IonCardHeader>

                <IonCardContent>
                    <IonCardSubtitle className="ion-text-center hide-overflow-text">
                    {
                        formatName(props.path)
                    }
                    </IonCardSubtitle>
                </IonCardContent>
                <IonRippleEffect type="unbounded"></IonRippleEffect>
            </IonCard>
        </React.Fragment>
    );
}

export default FolderBox;