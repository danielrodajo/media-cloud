import { IonIcon, IonItem, IonLabel, IonToggle } from '@ionic/react'
import { arrowBackOutline, moonOutline } from 'ionicons/icons';
import React, { useState } from 'react'
import Toolbar from '../../../components/ToolBar/Toolbar';

const Theme: React.FC = () => {

    const toggleDarkModeHandler = () => {
        document.body.classList.toggle("dark");
    };

    return (
        <React.Fragment>
            <Toolbar/>
            <IonItem button href="/profile">
                <IonIcon slot="start" icon={arrowBackOutline}/>
                <IonLabel>App theme</IonLabel>
            </IonItem>
            <IonItem>
                <IonIcon slot="start" icon={moonOutline} />
                <IonLabel>Dark Mode</IonLabel>
                <IonToggle slot="end" name="darkMode" onIonChange={toggleDarkModeHandler}/>
          </IonItem>
        </React.Fragment>
    )
}

export default Theme;