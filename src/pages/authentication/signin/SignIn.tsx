import React, { FormEvent } from 'react';
import './SignIn.css';
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

const SignIn: React.FC<props> = props => {

    const dispatch = useDispatch();
    const messageError: any = useSelector((state: RootState) => state.AuthReducer.signInError);


    const handleSignIn = (event: FormEvent<HTMLIonButtonElement>) => {
        event.preventDefault();
        dispatch(actions.signIn(props.userData.email, props.userData.password));
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
                            {(messageError) ? <span>{messageError.message}</span> : null}
                            <IonItem lines="inset">
                                <IonLabel position="floating">Email</IonLabel>
                                <IonInput type="email" name="email" value={props.userData.email} onIonChange={props.handleFormInput}></IonInput>    
                            </IonItem>
                            <IonItem lines="inset" className="ion-margin-bottom">
                                <IonLabel position="floating">Contraseña</IonLabel>
                                <IonInput type="password" name="password" value={props.userData.password}  onIonChange={props.handleFormInput}></IonInput>
                            </IonItem>

                            <IonButton expand="block" onClick={handleSignIn}>Iniciar Sesión</IonButton>
                            <IonButton expand="block" color="secondary"  onClick={() => {dispatch(actions.switchComponent("signup"))}}>Registrarse</IonButton>
                            <IonItem className="ion-margin-top" lines="none">
                                <IonText className="ion-text-center">¿Has olvidado tu contraseña?<br/> <a onClick={() => {dispatch(actions.switchComponent("forgotpass"))}} className="forgot-password-link">Pulsa aquí.</a></IonText>
                            </IonItem>
                        </IonCardContent>
                    </IonCard>         
                </IonRow>
            </IonGrid>
        </IonContent>
    );
}

export default SignIn;