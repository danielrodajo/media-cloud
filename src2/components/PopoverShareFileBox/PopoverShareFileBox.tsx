import './PopoverShareFileBox.scss';
import React from 'react';
import { IonPopover, IonCard, IonCardHeader, IonCardContent, IonCardSubtitle, IonGrid, IonRow, IonCol, IonButton, IonIcon } from '@ionic/react';
import { cloudDownloadOutline } from 'ionicons/icons';
import { File } from '../../store/types';
import DisplayImage from '../DisplayImage/DisplayImage';

export interface PopoverShareFileBoxProps {
    showPopover: boolean; 
    setShowPopover: (value: boolean) => void;
    file: File;
}
 
const PopoverShareFileBox: React.SFC<PopoverShareFileBoxProps> = props => {

    return (
        <React.Fragment>
            <IonPopover
            isOpen={props.showPopover}
            cssClass='my-custom-class'
            onDidDismiss={e => props.setShowPopover(false)}
        >
            <IonCard className="my-custom-ion-card">
                <IonCardHeader className="center-spinner">
                    <DisplayImage file={props.file} isPopover={true} />
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
                        </IonRow>
                    </IonGrid>
                </IonCardContent>
            </IonCard>
        </IonPopover>
        </React.Fragment>  
    );
}
 
export default PopoverShareFileBox;