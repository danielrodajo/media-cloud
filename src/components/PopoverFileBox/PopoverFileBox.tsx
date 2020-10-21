import React, { useState } from 'react';
import { IonPopover, IonCard, IonCardHeader, IonImg, IonCardContent, IonCardSubtitle, IonGrid, IonRow, IonCol, IonButton, IonIcon, IonSpinner } from '@ionic/react';
import { cloudDownloadOutline, trashOutline, shareSocialOutline } from 'ionicons/icons';
import './PopoverFileBox.scss';
import { formatDisplayImage } from '../../shared/utility';
import { File } from '../../store/types';
import { useDispatch } from 'react-redux';
import * as actions from "../../store/actions/index";

interface props {
    showPopover: boolean; 
    setShowPopover: (value: boolean) => void;
    file: File;
    remove: (value: string) => void;
    removeError: Error
 }

const PopoverFileBox: React.FC<props> = props => {

    const dispatch = useDispatch();

    const handleRemove = () => {
        props.remove(props.file.key);
        props.setShowPopover(false);
    }
    const [loading, setLoading] = useState(true);

    const getShareFiles = (filePaths: any, friendId: String) => dispatch(actions.recoverShareFiles(filePaths, friendId));

    const handleShareFile = () => {
        //const filePaths = ["001.jpg", "Anteproyecto (1).pdf", "DARDE_DANIEL RS.pdf", "chrome.dll"];
        //getShareFiles(filePaths, "eu-west-1:13b39c87-3384-4c6f-ac60-f8991d63cf43");
    }

    return (
        <IonPopover
            isOpen={props.showPopover}
            cssClass='my-custom-class'
            onDidDismiss={e => props.setShowPopover(false)}
        >
            <IonCard className="my-custom-ion-card">
                <IonCardHeader className="center-spinner">
                    <IonSpinner color="tertiary" className={!loading ? "hide-img" : "popover-spinner"} />
                    <IonImg  onIonImgDidLoad={() => setLoading(false)} onIonError={() => {console.log("ERROR CARGANDO"); setLoading(false);}} 
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
                            <IonCol>
                                <IonButton color="success" onClick={handleShareFile}>
                                    <IonIcon icon={shareSocialOutline}></IonIcon>
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