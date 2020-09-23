import * as React from 'react';
import { IonTabButton, IonLabel, IonIcon } from '@ionic/react';

interface props {
    tab: string;
    href: string;
    label: string;
    icon: string;
}

const BottomBarButton: React.FC<props> = props => {

    return (
        <React.Fragment>
            <IonTabButton tab={props.tab} href={props.href} >
              <IonIcon icon={props.icon} /> 
              <IonLabel>{props.label}</IonLabel>
            </IonTabButton>
        </React.Fragment>
    )
}

export default BottomBarButton;