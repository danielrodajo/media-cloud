import './PopoverShareFileBox.scss';
import React, { useState } from 'react';
import { IonPopover, IonCard, IonCardHeader, IonImg, IonCardContent, IonCardSubtitle, IonGrid, IonRow, IonCol, IonButton, IonIcon, IonSpinner } from '@ionic/react';
import { cloudDownloadOutline } from 'ionicons/icons';
import { formatDisplayImage } from '../../shared/utility';
import { File } from '../../store/types';

export interface PopoverShareFileBoxProps {
    showPopover: boolean; 
    setShowPopover: (value: boolean) => void;
    file: File;
}
 
const PopoverShareFileBox: React.SFC<PopoverShareFileBoxProps> = props => {

    const [loading, setLoading] = useState(true);

    return (
        <React.Fragment>
            <IonPopover
            isOpen={props.showPopover}
            cssClass='my-custom-class'
            onDidDismiss={e => props.setShowPopover(false)}
        >
            <IonCard className="my-custom-ion-card">
                <IonCardHeader className="center-spinner">
                    <IonSpinner color="tertiary" className={!loading ? "hide-img" : "popover-spinner"} />
                    <IonImg onIonImgDidLoad={() => setLoading(false)} onIonError={() => {console.log("ERROR CARGANDO"); setLoading(false);}} 
                     className={loading ? "hide-img" : "popover-img"} src={formatDisplayImage(props.file.name, props.file.url)} />  
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