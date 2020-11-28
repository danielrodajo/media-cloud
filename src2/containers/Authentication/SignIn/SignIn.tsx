
import React, { FormEvent, useRef } from 'react';

import './SignIn.scss';
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

const SignIn: React.FC<props> = props => {

    const inputEmail = useRef(null);
    const inputPass = useRef(null);

    const dispatch = useDispatch();
    const messageError: any = useSelector((state: RootState) => state.AuthReducer.signInError);


    const handleSignIn = (event: FormEvent<HTMLIonButtonElement>) => {
        event.preventDefault();
        dispatch(actions.signIn((inputEmail.current as unknown as HTMLIonInputElement).value+"", (inputPass.current as unknown as HTMLIonInputElement).value+""));
    };

    const errorManagement = (name: string ) => {
        switch (name) {
            case "UserNotFoundException":
                return "Este usuario no existe.";
            case "NotAuthorizedException":
                return "Usuario y/o contraseña erroneos.";
            case undefined:
                return "Ha surgido un error inesperado";
            default: return "Ha surgido un error inesperado.";
        }
    }

    const disableButton = (inputEmail: string, inputPass: string) => {
        console.log(inputEmail);
        console.log(inputPass);
        return !(inputEmail !== "" && inputPass !== "");
    }

   

    return (
        <React.Fragment>       
            <MessageErrorToast message={messageError ? errorManagement(messageError.name) : undefined}/>
            <IonContent className="ion-padding" color="light">  
                <IonGrid className="max-height max-width">
                    <IonRow className="ion-justify-content-center max-height max-width">
                        <IonCard>
                            <IonCardHeader>        
                                <IonCardTitle className="ion-text-center"><IonImg className="logoimage" src={logo} alt="mediacloud"/></IonCardTitle>
                            </IonCardHeader>
                            <IonCardContent className="ion-justify-content-center max-height ion-align-items-center">
                                <IonItem lines="inset">
                                    <IonLabel position="floating">Email</IonLabel>
                                    <IonInput autocomplete="username" ref={inputEmail} type="email" name="email" value={props.userData.email} onIonChange={props.handleFormInput}></IonInput>    
                                </IonItem>
                                <IonItem lines="inset" className="ion-margin-bottom">
                                    <IonLabel position="floating">Contraseña</IonLabel>
                                    <IonInput autocomplete="current-password" ref={inputPass} type="password" name="password" value={props.userData.password}  onIonChange={props.handleFormInput}></IonInput>    
                                </IonItem>
                                <IonButton expand="block" onClick={handleSignIn}>Iniciar Sesión</IonButton>
                                <IonButton expand="block" color="tertiary"  onClick={() => {dispatch(actions.switchComponent("signup"))}}>Registrarse</IonButton> 
                                
                                <IonItem className="ion-margin-top" lines="none">
                                    <IonText className="ion-text-center">¿Has olvidado tu contraseña?<br/> <IonButton onClick={() => {dispatch(actions.switchComponent("forgotpass"))}} className="forgot-password-link">Pulsa aquí.</IonButton></IonText>
                                </IonItem>
                            </IonCardContent>
                        </IonCard>         
                    </IonRow>
                </IonGrid>
            </IonContent>
        </React.Fragment>
    );
}

export default SignIn;