import { IonButton, IonCol, IonGrid, IonIcon, IonInput, IonItem, IonLabel, IonModal, IonRow, IonText, IonToast } from '@ionic/react';
import { closeOutline } from 'ionicons/icons';
import React, { useRef, useState } from 'react';
import './ChangePassword.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store/store';

interface props {
    showModal: boolean,
    setShowModal: (value: boolean) => void,
    handleChangePassword: (password: string, code: string) => void,
}

const ChangePassword: React.FC<props> = props => {
    const submitError:any = useSelector((state:RootState) => state.AuthReducer.forgotPasswordSubmitError);
    const inputPin:any = useRef(null);
    const inputPassword:any = useRef(null);
    const inputRepeatPassword:any = useRef(null);
    const [showToast, setShowToast] = useState(false);

    const handlePassword = () => {
        if (inputPassword.current!.value === inputRepeatPassword.current!.value)
            props.handleChangePassword(inputPassword.current!.value, inputPin.current!.value);
        else
            setShowToast(true);
    }

    return(
        <React.Fragment>           
            <IonToast
                isOpen={showToast}
                onDidDismiss={() => setShowToast(false)}
                message="Las contraseñas no coinciden."
                duration={1500}
            /> 
            <IonModal isOpen={props.showModal}>
                <IonItem button lines="none" onClick={() => props.setShowModal(false)}>
                    <IonIcon slot="start" icon={closeOutline}/>
                    <IonLabel>Cambiar contraseña</IonLabel>
                </IonItem>
                {submitError && <IonText>{submitError.message}</IonText>}
                <IonText color="secondary" className="custom-text-change-password">Se le ha enviado un mensaje al correo de su cuenta para recuperar la contraseña.</IonText>   
                <IonGrid className="ion-no-margin">             
                    <IonRow className="ion-padding-bottom">
                        <IonCol>
                            <IonItem lines="inset" className="edit-item">
                                <IonLabel position="floating">Introducir Pin</IonLabel>
                                <IonInput type="text" name="pin" ref={inputPin} />
                            </IonItem>
                        </IonCol>
                    </IonRow>        
                    <IonRow className="ion-padding-top ion-margin-top">
                        <IonCol>
                            <IonText color="primary"> Por favor introduce la nueva contraseña:</IonText>      
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
                    <IonRow className="ion-justify-content-center ion-margin-top">
                        <IonButton onClick={() => handlePassword()}>Cambiar contraseña</IonButton>                    
                    </IonRow>
                </IonGrid>
            </IonModal>
        </React.Fragment>
    )
}

export default ChangePassword;