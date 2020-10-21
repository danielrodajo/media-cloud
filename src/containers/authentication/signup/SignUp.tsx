import React from 'react';
import './SignUp.css';
import { IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonItem, IonLabel, IonInput, IonButton, IonRow, IonGrid, IonImg, IonText } from '@ionic/react';
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

    const handleSignUp = (event: any) => {
        event.preventDefault();
        dispatch(actions.signUp(props.userData.email, props.userData.username, props.userData.password));
    };

    const errorManagement = (messageError: string) => {

        let message = "";

        switch (messageError) {
            case "Username should be an email.":
                message = "El correo no es valido.";
                break;

            case "1 validation error detected: Value at 'password' failed to satisfy constraint: Member must have length greater than or equal to 6":
                message = "Contraseña no valida,debe tener 6 caracteres o mas.";
                break;

            case "An account with the given email already exists.":
                message = "Este correo ya esta registrado";
                break;
            
        }
 
        return message;
    }

    const disableButton = (inputEmail: string, inputName: string, inputPass: string) => {

        let disable = true;

        if (inputEmail !== ""){
            if(inputPass !== ""){
                if(inputName !== ""){
                    disable = false;
                }
            }
        }

        return disable;
    }


    return (
        
        <IonContent className="ion-padding" color="light">
            <IonGrid className="max-height">
                <IonRow className="ion-justify-content-center max-height">
                    <IonCard>
                        <IonCardHeader>
                            <IonCardTitle className="ion-text-center"><IonImg className="logoimage" src={logo} alt="mediacloud"/></IonCardTitle>
                        </IonCardHeader>

                        <IonCardContent className="ion-justify-content-center max-height ion-align-items-center">
                            {(messageError) ? 
                            <IonItem lines="none">
                                <IonText>{errorManagement(messageError.message)}</IonText>
                            </IonItem> 
                            : <IonItem lines="none"><IonText><br/></IonText></IonItem>}
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

                            <IonButton expand="block" color="secondary" onClick={handleSignUp} disabled={disableButton(props.userData.email, props.userData.username, props.userData.password)}>Registrarse</IonButton>
                            <IonButton expand="block" onClick={() => {dispatch(actions.switchComponent("signin"))}}>Volver a Iniciar Sesión</IonButton>
                        </IonCardContent>
                    </IonCard>         
                </IonRow>
            </IonGrid>
        </IonContent>
    );
}

export default SignUp;