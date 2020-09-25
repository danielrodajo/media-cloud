import { IonIcon, IonItem, IonLabel, IonRadio, IonRadioGroup } from '@ionic/react'
import { arrowBackOutline } from 'ionicons/icons';
import React, { useState } from 'react'
import Toolbar from '../../../components/ToolBar/Toolbar';

const Theme: React.FC = () => {

    const [selected, setSelected] = useState<string>('default');

    return (
        <React.Fragment>
            <Toolbar/>
            <IonRadioGroup value={selected} onIonChange={button => setSelected(button.detail.value)}>
                <IonItem button href="/profile">
                    <IonIcon slot="start" icon={arrowBackOutline}/>
                    <IonLabel>App Theme</IonLabel>
                </IonItem> 
                
                <IonItem>
                    <IonLabel>Dark</IonLabel>
                    <IonRadio value="dark"/>
                </IonItem>

                <IonItem>
                    <IonLabel>Light</IonLabel>
                    <IonRadio value="light"/>
                </IonItem>

                <IonItem>
                    <IonLabel>Default</IonLabel>
                    <IonRadio value="default"/>
                </IonItem>
            </IonRadioGroup>
        </React.Fragment>
    )
}

export default Theme;