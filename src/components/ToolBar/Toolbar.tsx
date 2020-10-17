import React from 'react'
import { IonToolbar, IonHeader, IonImg, IonIcon, IonItem } from '@ionic/react';
import logo from "../../images/lightlogobg.png";
import './Toolbar.scss'
import { notifications, personAdd } from 'ionicons/icons';



const Toolbar: React.FC= () => {
    return ( 
        <IonHeader>
            <IonToolbar>    
                <IonItem lines="none" className="custom-icons">    
                    <IonItem lines="none" className="custom-icon" button onClick={(e) => console.log("Notificaciones")}>
                        <IonIcon  slot="end" icon={notifications}/>
                    </IonItem> 
                    <IonItem lines="none" className="custom-icon" button onClick={(e) => console.log("Amigos")}>
                        <IonIcon  slot="end" icon={personAdd}/>
                    </IonItem> 
                </IonItem>     
                <IonImg className="logoimage" src={logo} alt="mediacloud"/>    
            </IonToolbar>
        </IonHeader>
    );
}

export default Toolbar;