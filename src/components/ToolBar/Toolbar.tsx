import React from 'react'
import { IonToolbar, IonHeader, IonImg } from '@ionic/react';
import logo from "../../images/lightlogobg.png";
import './Toolbar.css'



const Toolbar: React.FC= () => {
    return ( 
        <IonHeader>
            <IonToolbar>
                <IonImg className="logoimage" src={logo} alt="mediacloud"/>       
            </IonToolbar>
        </IonHeader>
    );
}

export default Toolbar;