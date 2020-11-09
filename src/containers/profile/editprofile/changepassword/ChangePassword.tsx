import { IonButton, IonCol, IonGrid, IonIcon, IonInput, IonItem, IonLabel, IonModal, IonRow } from '@ionic/react';
import { closeOutline } from 'ionicons/icons';
import React, { useRef } from 'react';
import './ChangePassword.scss';

interface props {
    showModal: boolean,
    setShowModal: (value: boolean) => void
}

const ChangePassword: React.FC<props> = props => {

    const inputPassword = useRef(null);
    const inputRepeatPassword = useRef(null);

    return(
        <React.Fragment>
            <IonModal isOpen={props.showModal}>
                <IonItem button lines="none" onClick={() => props.setShowModal(false)}>
                    <IonIcon slot="start" icon={closeOutline}/>
                    <IonLabel>Cambiar contraseña</IonLabel>
                </IonItem>
                <IonGrid className="ion-no-margin">
                    <IonRow className="ion-padding-top">
                        <IonCol>
                            Por favor introduce la nueva contraseña:
                        </IonCol>
                    </IonRow>
                    <IonRow className="ion-padding-top ion-padding-bottom">
                        <IonCol>
                            <IonItem lines="inset" className="edit-item">
                                <IonLabel position="floating">Nueva contraseña</IonLabel>
                                <IonInput autocomplete="current-password" type="password" name="password" ref={inputPassword} />
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow className="ion-padding-bottom">
                        <IonCol>
                            <IonItem lines="inset" className="edit-item">
                                <IonLabel position="floating">Repite la contraseña</IonLabel>
                                <IonInput autocomplete="current-password" type="password" name="password" ref={inputRepeatPassword} />
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonButton>Cambiar contraseña</IonButton>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonModal>
        </React.Fragment>
    )
}

export default ChangePassword;