import { IonCol, IonGrid, IonIcon, IonItem, IonLabel, IonModal, IonRow, IonToggle } from '@ionic/react'
import { arrowBackOutline, moonOutline } from 'ionicons/icons';
import React from 'react'

interface props {
    showModal: boolean
    setShowModal: (value: boolean) => void
}

const Settings: React.FC<props> = props => {

    const toggleDarkModeHandler = () => {
    };

    return (
        <React.Fragment>
            <IonModal isOpen={props.showModal}>
                <IonItem button onClick={() => props.setShowModal(false)}>
                    <IonIcon slot="start" icon={arrowBackOutline}/>
                    <IonLabel>App theme</IonLabel>
                </IonItem>
                <IonGrid className="ion-no-margin">
                    <IonRow>
                        <IonCol size='12'>                            
                            <IonItem>
                                <IonIcon slot="start" icon={moonOutline} />
                                <IonLabel>Dark Mode</IonLabel>
                                <IonToggle slot="end" name="darkMode" onIonChange={toggleDarkModeHandler}/>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonModal>
        </React.Fragment>
    )
}

export default Settings;