import React, { useEffect, useState } from 'react';
import './SignUp.scss';
import { IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonItem, IonLabel, IonInput, IonButton, IonRow, IonGrid, IonImg, IonToast } from '@ionic/react';
import { UserData } from '../../../store/types';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import * as actions from '../../../store/actions/index';
import logo from "../../../images/lightlogobg.png";

interface props {
    userData: UserData,
    handleFormInput: (event: CustomEvent) => void,
}

const SignUp: React.FC<props> = props => {

    const dispatch = useDispatch();
    const messageError: any = useSelector((state: RootState) => state.AuthReducer.signUpError);

    const [showToast, setShowToast] = useState(false);

    const handleSignUp = (event: any) => {
        event.preventDefault();
        dispatch(actions.signUp(props.userData.email, props.userData.username.toLowerCase(), props.userData.password));
    };

    const errorManagement = (messageError: string) => {
        switch (messageError) {
            case "Username should be an email.":
                return "El correo no es valido.";

            case "1 validation error detected: Value at 'password' failed to satisfy constraint: Member must have length greater than or equal to 6":
                return "Contraseña no valida,debe tener 6 caracteres o mas.";

            case "An account with the given email already exists.":
                return "Este correo ya esta registrado";
            
            default: return "Ha surgido un error inesperado.";
        }
    }

    const disableButton = (inputEmail: string, inputName: string, inputPass: string) => {
        return !(inputEmail !== "" && inputPass !== "" && inputName !== "");
    }

    useEffect(() => {
        if(messageError){
            setShowToast(true);
        }
    }, [messageError])

    return (
        <React.Fragment>         
            <IonToast 
                isOpen={showToast}
                onDidDismiss={() => setShowToast(false)}
                message= {(messageError) ? errorManagement(messageError.message) : ""}
                duration={500}
                position="top"/>
            <IonContent className="ion-padding" color="light">
                <IonGrid className="max-height">
                    <IonRow className="ion-justify-content-center max-height">
                        <IonCard>
                            <IonCardHeader>
                                <IonCardTitle className="ion-text-center"><IonImg className="logoimage" src={logo} alt="mediacloud"/></IonCardTitle>
                            </IonCardHeader>

                            <IonCardContent className="ion-justify-content-center max-height ion-align-items-center">
                                <IonItem lines="inset">
                                    <IonLabel position="floating">Email</IonLabel>
                                    <IonInput autocomplete="email" type="email" name="email" value={props.userData.email} onIonChange={props.handleFormInput}></IonInput>    
                                </IonItem>
                                <IonItem lines="inset">
                                    <IonLabel position="floating">Nombre</IonLabel>
                                    <IonInput autocomplete="name" type="text" name="username" value={props.userData.username} onIonChange={props.handleFormInput}></IonInput>    
                                </IonItem>
                                <IonItem lines="inset" className="ion-margin-bottom">
                                    <IonLabel position="floating">Contraseña</IonLabel>
                                    <IonInput autocomplete="current-password" type="password" name="password" value={props.userData.password}  onIonChange={props.handleFormInput}></IonInput>
                                </IonItem>

                                <IonButton expand="block" onClick={handleSignUp} disabled={disableButton(props.userData.email, props.userData.username, props.userData.password)}>Registrarse</IonButton>
                                <IonButton expand="block" color="tertiary" onClick={() => {dispatch(actions.switchComponent("signin"))}}>Volver a Iniciar Sesión</IonButton>
                            </IonCardContent>
                        </IonCard>         
                    </IonRow>
                </IonGrid>
            </IonContent>
        </React.Fragment>
    );
}

export default SignUp;