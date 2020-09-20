import React, { useRef } from 'react';
import { IonTabButton, IonIcon, IonLabel } from '@ionic/react';

interface props {
    href: string;
    name: string;
    icon: string;
}

const BottomBarButton: React.FC<props> = props => {
    const myRef = useRef(null);

    return (
        <IonTabButton tab={props.name} href={props.href} ref={myRef}>
            <IonIcon icon={props.icon}/> 
            <IonLabel>{props.name}</IonLabel>
        </IonTabButton>
    );
}

export default BottomBarButton;