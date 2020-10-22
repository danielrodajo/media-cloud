import React, { useState } from 'react';
import { IonPopover, IonCard, IonCardHeader, IonImg, IonCardContent, IonCardSubtitle, IonGrid, IonRow, IonCol, IonButton, IonIcon, IonSpinner } from '@ionic/react';
import { cloudDownloadOutline, trashOutline } from 'ionicons/icons';
import './PopoverFileBox.scss';
import { formatDisplayImage } from '../../shared/utility';
import { File } from '../../store/types';

interface props {
    showPopover: boolean; 
    setShowPopover: (value: boolean) => void;
    file: File;
    remove: (value: string) => void;
    removeError: Error
 }

const PopoverFileBox: React.FC<props> = props => {

    const handleRemove = () => {
        props.remove(props.file.key);
        props.setShowPopover(false);
     }
     const [loading, setLoading] = useState(true);

    return (
        <IonPopover
            isOpen={props.showPopover}
            cssClass='my-custom-class'
            onDidDismiss={e => props.setShowPopover(false)}
        >
            <IonCard>
                <IonSpinner color="tertiary" className={!loading ? "hide-img" : "popover-spinner"} />
                <IonImg  onIonImgDidLoad={() => setLoading(false)} onIonError={() => {console.log("ERROR CARGANDO"); setLoading(false);}} 
                     className={loading ? "hide-img" : "popover-img"} src={formatDisplayImage(props.file.name, props.file.url)} />  
                
                <IonCardHeader className="center-spinner">
                    <IonCardSubtitle className="ion-text-center">{props.file.name}</IonCardSubtitle>
                </IonCardHeader>

                <IonCardContent>
                    <IonGrid>
                        <IonRow className="ion-text-center">
                            <IonCol>
                                <IonButton color="tertiary" download={props.file.name} href={props.file.url}>
                                    <IonIcon icon={cloudDownloadOutline}></IonIcon>
                                </IonButton>
                            </IonCol>
                            <IonCol>
                                <IonButton color="danger" onClick={handleRemove}>
                                    <IonIcon icon={trashOutline}></IonIcon>
                                </IonButton>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </IonCardContent>
            </IonCard>
        </IonPopover>
    );
}

export default PopoverFileBox;