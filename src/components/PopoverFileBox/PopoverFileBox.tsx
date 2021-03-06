import React, { useState } from 'react';
import { IonPopover, IonCard, IonCardHeader, IonCardContent, IonCardSubtitle, IonGrid, IonRow, IonCol, IonButton, IonIcon, IonAlert } from '@ionic/react';
import { cloudDownloadOutline, trashOutline, shareSocialOutline } from 'ionicons/icons';
import './PopoverFileBox.scss';
import { File } from '../../store/types';
import ModalShareFriends from '../ModalShareFriends/ModalShareFriends';
import DisplayImage from '../DisplayImage/DisplayImage';

interface props {
    showPopover: boolean; 
    setShowPopover: (value: boolean) => void;
    file: File;
    remove: (value: string) => void;
 }

const PopoverFileBox: React.FC<props> = props => {

    const handleRemove = () => {
        props.remove(props.file.key);
        props.setShowPopover(false);
    }

    const [showAlert, setShowAlert] = useState(false);

    const [showFriendList, setShowFriendList] = useState(false);

    return (
        <React.Fragment>
            <IonAlert
                isOpen={showAlert}
                onDidDismiss={() => setShowAlert(false)}
                cssClass="my-custom-class"
                header={"¿Quieres borrar este fichero?"}
                buttons={["No",
                    {
                    text: "Si",
                    role: "accept",
                    handler: () => {
                        handleRemove();
                    },
                    },
                ]}
            />
            <ModalShareFriends file={props.file} show={showFriendList} setShow={setShowFriendList}/>
            <IonPopover
            isOpen={props.showPopover}
            cssClass='my-custom-class hide-background'
            onDidDismiss={e => props.setShowPopover(false)}>
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
                            <IonCol>
                                <IonButton color="success" onClick={() => setShowFriendList(true)}>
                                    <IonIcon icon={shareSocialOutline}></IonIcon>
                                </IonButton>
                            </IonCol>
                            <IonCol>
                                <IonButton color="danger" onClick={() => setShowAlert(true)}>
                                    <IonIcon icon={trashOutline}></IonIcon>
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

export default PopoverFileBox;