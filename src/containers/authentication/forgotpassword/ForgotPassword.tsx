import React, { FormEvent, useEffect, useState } from 'react';
import './ForgotPassword.css';
import { IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonItem, IonLabel, IonInput, IonButton, IonRow, IonGrid, IonImg, IonToast} from '@ionic/react';
import { UserData } from '../../../store/types';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import * as actions from '../../../store/actions/index';
import logo from "../../../images/lightlogobg.png";

interface props {
    userData: UserData,
    handleFormInput: (event: CustomEvent) => void,
}
const ForgotPassword: React.FC<props> = props => {

    const dispatch = useDispatch();
    const messageError: any = useSelector((state: RootState) => state.AuthReducer.forgotPasswordError);

    const [showToast, setShowToast] = useState(false);
    
    const handlePassword = (event: FormEvent<HTMLIonButtonElement>) => {
        event.preventDefault();
        dispatch(actions.forgotPassword(props.userData.email));
    };

    const errorManagement = (code: string) => {

        if ( code === "UserNotFoundException")
            return "Este usuario no existe."
    }

    const disableButton = (inputEmail: string) => {
        return !(inputEmail !== "");
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
            message= {(messageError) ? errorManagement(messageError.name) : ""}
            duration={500}
            position="top"/>
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
                                    <IonLabel position="floating">Introduzca su Email</IonLabel>
                                    <IonInput type="email" name="email" value={props.userData.email} onIonChange={props.handleFormInput}></IonInput>
                                </IonItem>

                                <IonButton expand="block" onClick={handlePassword} disabled={disableButton(props.userData.email)}>Siguiente</IonButton>
                                <IonButton expand="block" color="tertiary"  onClick={() => dispatch(actions.switchComponent("signin"))}>Volver a Iniciar Sesión</IonButton>
                            </IonCardContent>
                        </IonCard>         
                    </IonRow>
                </IonGrid>
            </IonContent>
        </React.Fragment>
    );
}

export default ForgotPassword;