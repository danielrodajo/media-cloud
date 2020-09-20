import React, { FormEvent } from 'react';
import * as actions from '../../../store/actions/index';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { logOutOutline } from 'ionicons/icons';
import './SignOut.css';
import { IonItem, IonIcon } from '@ionic/react';

const SignOut = () => {
    const dispatch = useDispatch();

    //Datos del usuario activo
    const user = useSelector((state: RootState) => state.AuthReducer.user);

    const handleSignOut = (event: FormEvent<HTMLIonItemElement>) => {
        event.preventDefault();
        dispatch(actions.signOut());    
    };

    return (
        <IonItem className="ion-float-right" button onClick={handleSignOut} lines="none">
            <IonIcon icon={logOutOutline}/>
        </IonItem>  
    );
}
 
export default SignOut;