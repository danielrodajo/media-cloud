import React, { useState } from 'react'
import { IonToolbar, IonHeader, IonImg, IonIcon, IonItem, IonBadge } from '@ionic/react';
import logo from "../../images/lightlogobg.png";
import './Toolbar.scss'
import { notifications, personAdd } from 'ionicons/icons';
import ModalNotifications from '../ModalNotifications/ModalNotifications';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';



const Toolbar: React.FC= () => {

    const [showNotifications, setShowNotifications] = useState(false);

    const userNotifications = useSelector((state: RootState) => state.NotificationReducer.notifications);

    return ( 
        <IonHeader>
            <ModalNotifications showModal={showNotifications} setShowModal={setShowNotifications}/>
            <IonToolbar>    
                <IonItem lines="none" className="custom-icons">    
                    <IonItem lines="none" className="custom-icon" button onClick={(e) => setShowNotifications(true)}>
                        <IonIcon  slot="end" icon={notifications}/>
                        {
                            (userNotifications && userNotifications.length > 0) ? <IonBadge slot="start" class="my-badge">{userNotifications.length}</IonBadge> : null
                        }
                    </IonItem> 
                </IonItem>     
                <IonImg className="logoimage" src={logo} alt="mediacloud"/>    
            </IonToolbar>
        </IonHeader>
    );
}

export default Toolbar;