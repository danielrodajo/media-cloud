import React, { useState } from 'react';
import * as actions from '../../../store/actions/index';
import { useDispatch } from 'react-redux';
import { logOutOutline } from 'ionicons/icons';
import './SignOut.css';
import { IonItem, IonIcon, IonAlert, IonLabel } from '@ionic/react';

const SignOut = () => {
    const dispatch = useDispatch();

    //Datos del usuario activo
    //const user = useSelector((state: RootState) => state.AuthReducer.user);

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
            <IonItem button onClick={() => setShowAlert(true)}>
                <IonIcon className="ion-icon-red" slot="start" icon={logOutOutline}/>
                <IonLabel color="danger">Cerrar Sesion</IonLabel>
            </IonItem> 
        </React.Fragment>
         
    );
}
 
export default SignOut;