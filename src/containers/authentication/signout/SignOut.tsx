import React, { useState } from 'react';
import { logOutOutline } from 'ionicons/icons';
import './SignOut.css';
import { IonItem, IonIcon, IonAlert, IonLabel } from '@ionic/react';
import { useHistory } from 'react-router';
import { RootState } from '../../../store/store';
import { useSelector } from 'react-redux';
import MessageErrorToast from '../../../components/MessageErrorToast/MessageErrorToast';

interface props {
    handleSignOut: () => void
}

const SignOut: React.FC<props> = props => {

    const [showAlert, setShowAlert] = useState(false);
    const messageError: any = useSelector((state: RootState) => state.AuthReducer.signOutError);
    const history = useHistory();

    const handleClick = () => {
        history.push("/");
    }

    return (
        <React.Fragment>
            <MessageErrorToast message={messageError ? messageError.message : undefined}/>
            <IonAlert
                isOpen={showAlert}
                onDidDismiss={() => setShowAlert(false)}
                cssClass="my-custom-class"
                header={"¿Quieres cerrar sesión?"}
                buttons={["No",
                    {
                    text: "Si",
                    role: "accept",
                    handler: () => {
                       props.handleSignOut();
                       handleClick();
                    },
                    },
                ]}
            />
            <IonItem button onClick={() => setShowAlert(true)}>
                <IonIcon className="ion-icon-red" slot="start" icon={logOutOutline}/>
                <IonLabel color="danger">Cerrar Sesion</IonLabel>
            </IonItem> 
        </React.Fragment>
         
    );
}
 
export default SignOut;