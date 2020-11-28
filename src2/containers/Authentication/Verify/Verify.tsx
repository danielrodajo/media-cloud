import React from 'react';
import './Verify.css';
import { IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonItem, IonLabel, IonInput, IonButton, IonRow, IonGrid, IonImg } from '@ionic/react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import * as actions from '../../../store/actions/index';
import { UserData } from '../../../store/types';
import logo from "../../../images/lightlogobg.png";
import MessageErrorToast from '../../../components/MessageErrorToast/MessageErrorToast';

interface props {
    userData: UserData,
    handleFormInput: (event: CustomEvent) => void,
}

const Verify: React.FC<props> = props => {

    const dispatch = useDispatch();
    const messageError: any = useSelector((state: RootState) => state.AuthReducer.verifyError);

    const handleVerification = (event: any) => {
        event.preventDefault();
        dispatch(actions.verify(props.userData.email, props.userData.code));
    };

    const errorManagement = (messageError: string) => {
        if(messageError === "CodeMismatchException")
            return "Codigo invalido";
    }

    const disableButton = (inputCode: string) => {
        return !(inputCode !== "" );
    }

    return (
        <React.Fragment>  
            <MessageErrorToast message={messageError ? errorManagement(messageError.code) : undefined}/>       
            <IonContent className="ion-padding" color="light">
                <IonGrid className="max-height">
                    <IonRow className="ion-justify-content-center max-height">
                        <IonCard>
                            <IonCardHeader>
                            <IonCardTitle className="ion-text-center"><IonImg className="logoimage" src={logo} alt="mediacloud"/></IonCardTitle>
                            </IonCardHeader>

                            <IonCardContent className="ion-justify-content-center max-height ion-align-items-center">
                                Se ha enviado un código de verificación a su correo.
                                <IonItem lines="inset" className="ion-margin-bottom">
                                    <IonLabel position="floating">Introducir Pin</IonLabel>
                                    <IonInput type="number" name="code" onIonChange={props.handleFormInput}></IonInput>    
                                </IonItem>

                                <IonButton expand="block" onClick={handleVerification} disabled={disableButton(props.userData.code)}>Verificar</IonButton>
                                <IonButton expand="block" color="secondary"  onClick={() => dispatch(actions.switchComponent("signin"))}>Volver a Iniciar Sesión</IonButton>
                            </IonCardContent>
                        </IonCard>         
                    </IonRow>
                </IonGrid>
            </IonContent>
        </React.Fragment>
    );
}

export default Verify;