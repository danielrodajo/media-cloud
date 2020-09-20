import React from 'react';
import './SignUp.css';
import { IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonItem, IonLabel, IonInput, IonButton, IonRow, IonGrid, IonImg } from '@ionic/react';
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
    const messageError = useSelector((state: RootState) => state.AuthReducer.signUpError);

    const handleSignUp = (event: any) => {
        event.preventDefault();
        dispatch(actions.signUp(props.userData.email, props.userData.username, props.userData.password));
      };


    return (
        
        <IonContent className="ion-padding" color="light">
            <IonGrid className="max-height">
                <IonRow className="ion-justify-content-center max-height">
                    <IonCard>
                        <IonCardHeader>
                            <IonCardTitle className="ion-text-center"><IonImg className="logoimage" src={logo} alt="mediacloud"/></IonCardTitle>
                        </IonCardHeader>

                        <IonCardContent className="ion-justify-content-center max-height ion-align-items-center">
                            {(messageError) ? <span>{messageError}</span> : null}
                            <IonItem lines="inset">
                                <IonLabel position="floating">Email</IonLabel>
                                <IonInput type="email" name="email" value={props.userData.email} onIonChange={props.handleFormInput}></IonInput>    
                            </IonItem>
                            <IonItem lines="inset">
                                <IonLabel position="floating">Nombre</IonLabel>
                                <IonInput type="text" name="username" value={props.userData.username} onIonChange={props.handleFormInput}></IonInput>    
                            </IonItem>
                            <IonItem lines="inset" className="ion-margin-bottom">
                                <IonLabel position="floating">Contraseña</IonLabel>
                                <IonInput type="password" name="password" value={props.userData.password}  onIonChange={props.handleFormInput}></IonInput>
                            </IonItem>

                            <IonButton expand="block" color="secondary" onClick={handleSignUp}>Registrarse</IonButton>
                            <IonButton expand="block" onClick={() => {dispatch(actions.switchComponent("signin"))}}>Volver a Iniciar Sesión</IonButton>
                        </IonCardContent>
                    </IonCard>         
                </IonRow>
            </IonGrid>
        </IonContent>
    );
}

export default SignUp;