import React, { FormEvent, useState } from 'react';
import * as actions from '../../../store/actions/index';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { logOutOutline } from 'ionicons/icons';
import './SignOut.css';
import { IonItem, IonIcon, IonAlert } from '@ionic/react';

const SignOut = () => {
    const dispatch = useDispatch();

    //Datos del usuario activo
    const user = useSelector((state: RootState) => state.AuthReducer.user);

    const [showAlert, setShowAlert] = useState(false);

    return (
        <React.Fragment>
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
                        dispatch(actions.signOut())
                    },
                    },
                ]}
            />
            <IonItem className="ion-float-right" button onClick={() => setShowAlert(true)} lines="none">
                <IonIcon icon={logOutOutline}/>
            </IonItem> 
        </React.Fragment>
         
    );
}
 
export default SignOut;