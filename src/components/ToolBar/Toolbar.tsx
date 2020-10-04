import React from 'react'
import { IonToolbar, IonHeader, IonImg } from '@ionic/react';
import logo from "../../images/lightlogobg.png";
import './Toolbar.css'
import SignOut from '../../pages/authentication/signout/SignOut';



const Toolbar: React.FC= () => {
    return ( 
        <IonHeader>
            <IonToolbar>
                <SignOut />
                <IonImg className="logoimage" src={logo} alt="mediacloud"/>       
            </IonToolbar>
        </IonHeader>
    );
}

export default Toolbar;