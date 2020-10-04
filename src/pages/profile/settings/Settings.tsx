import { IonIcon, IonItem, IonLabel, IonModal, IonToggle } from '@ionic/react'
import { arrowBackOutline, moonOutline } from 'ionicons/icons';
import React from 'react'

interface props {
    showModal: boolean
    setShowModal: (value: boolean) => void
}

const Settings: React.FC<props> = props => {

    const toggleDarkModeHandler = () => {
        document.body.classList.toggle("dark");
    };

    return (
        <React.Fragment>
            <IonModal isOpen={props.showModal} cssClass="fullheight">
                <IonItem button onClick={() => props.setShowModal(false)}>
                    <IonIcon slot="start" icon={arrowBackOutline}/>
                    <IonLabel>App theme</IonLabel>
                </IonItem>
                <IonItem>
                    <IonIcon slot="start" icon={moonOutline} />
                    <IonLabel>Dark Mode</IonLabel>
                    <IonToggle slot="end" name="darkMode" onIonChange={toggleDarkModeHandler}/>
                </IonItem>
            </IonModal>
        </React.Fragment>
    )
}

export default Settings;