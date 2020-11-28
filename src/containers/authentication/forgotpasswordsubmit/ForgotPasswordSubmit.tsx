import React, { FormEvent } from 'react';
import './ForgotPasswordSubmit.css';
import { IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonItem, IonLabel, IonInput, IonButton, IonRow, IonGrid, IonImg, IonText } from '@ionic/react';
import { UserData } from '../../../store/types';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import * as actions from '../../../store/actions/index';
import logo from "../../../images/lightlogobg.png";
import MessageErrorToast from '../../../components/MessageErrorToast/MessageErrorToast';

interface props {
    userData: UserData,
    handleFormInput: (event: CustomEvent) => void,
}
const ForgotPasswordSubmit: React.FC<props> = props => {

    const dispatch = useDispatch();
    const messageError: any = useSelector((state: RootState) => state.AuthReducer.forgotPasswordSubmitError);

    const handleFPSubmit = (event: FormEvent<HTMLIonButtonElement>) => {
        event.preventDefault();
        dispatch(actions.forgotPasswordSubmit(props.userData.email, props.userData.password, props.userData.code));
    };

    const errorManagement = (name: string ) => {
        switch (name) {
            case "InvalidParameterException":
                return "Contraseña no valida,debe tener 6 caracteres o mas.";
            case "CodeMismatchException":
                return "Codigo erroneo.";
            case undefined:
                return "Ha surgido un error inesperado";
            default: return "Ha surgido un error inesperado.";
        }
    }

    const disableButton = (inputCode: string, inputPass: string) => {
        return !(inputCode !== "" && inputPass !== "");
    }
    
    return (
        <React.Fragment>         
            <MessageErrorToast message={messageError ? errorManagement(messageError.name) : undefined}/>
            <IonContent className="ion-padding" color="light">
                <IonGrid className="max-height">
                    <IonRow className="ion-justify-content-center max-height">
                        <IonCard>
                            <IonCardHeader>
                            <IonCardTitle className="ion-text-center"><IonImg className="logoimage" src={logo} alt="mediacloud"/></IonCardTitle>
                            </IonCardHeader>

                            <IonCardContent className="ion-justify-content-center max-height ion-align-items-center ion-margin-top">
                                Se le enviará un mensaje al correo de <br/>su cuenta para recuperar la contraseña.
                                <IonItem lines="inset" className="ion-margin-bottom">
                                    <IonLabel position="floating">Introducir Pin</IonLabel>
                                    <IonInput type="number" name="code" onIonChange={props.handleFormInput}></IonInput>    
                                </IonItem>
                                <IonText>Introduzca la nueva contraseña.</IonText>
                                <IonItem lines="inset" className="ion-margin-bottom">
                                    <IonLabel position="floating">Contraseña</IonLabel>
                                    <IonInput type="password" name="password" value={props.userData.password} onIonChange={props.handleFormInput}></IonInput>
                                </IonItem>

                                <IonButton expand="block" disabled={disableButton(props.userData.code, props.userData.password)} onClick={handleFPSubmit}>Continuar</IonButton>
                                <IonButton expand="block" color="secondary"  onClick={() => dispatch(actions.switchComponent("signin"))}>Volver a Iniciar Sesión</IonButton>
                            </IonCardContent>
                        </IonCard>         
                    </IonRow>
                </IonGrid>
            </IonContent>
        </React.Fragment>
    );
}

export default ForgotPasswordSubmit;