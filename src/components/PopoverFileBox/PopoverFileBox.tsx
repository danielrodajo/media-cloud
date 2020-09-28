import React from 'react';
import { IonPopover, IonCard, IonCardHeader, IonImg, IonCardContent, IonCardSubtitle, IonGrid, IonRow, IonCol, IonButton, IonIcon } from '@ionic/react';
import { cloudDownloadOutline, trashOutline } from 'ionicons/icons';
import './PopoverFileBox.css';
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

    return (
        <IonPopover
            isOpen={props.showPopover}
            cssClass='my-custom-class'
            onDidDismiss={e => props.setShowPopover(false)}
        >
            <IonCard>
                <IonCardHeader>
                    <IonImg className="popover-img" src={formatDisplayImage(props.file.name, props.file.url)} />  
                </IonCardHeader>

                <IonCardContent>
                    <IonCardSubtitle className="ion-text-center">{props.file.name}</IonCardSubtitle>
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