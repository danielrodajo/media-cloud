import React from 'react';
import './FolderBox.css';
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardContent, IonImg, IonRippleEffect } from '@ionic/react';
import { formatDisplayImage } from '../../shared/utility';
import { folderOutline } from 'ionicons/icons';

interface props {
    name: string;
}

const FolderBox: React.FC<props> = props => {

    const formatName = (name: string) => {
        const slices = name.split("/");
        return slices[slices.length-2];
    }

    return (
        <React.Fragment>
           <IonCard className="card ion-activatable ripple-parent">
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