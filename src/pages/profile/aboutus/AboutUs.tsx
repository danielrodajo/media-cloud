import { IonItem, IonIcon, IonLabel, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonAvatar, IonImg } from '@ionic/react';
import { arrowBackOutline } from 'ionicons/icons';
import React from 'react'
import Toolbar from '../../../components/ToolBar/Toolbar'
import './AboutUs.css'
import dani from "../../../images/dani.jpg";
import raul from "../../../images/raul.jpg";

const Info: React.FC = () => {
    
    
    
    return (
        <React.Fragment>
            <Toolbar/>
            <IonItem button href="/profile">
                <IonIcon slot="start" icon={arrowBackOutline}/>
                <IonLabel>About us</IonLabel>
            </IonItem> 
            <IonCard class="text">
                <IonAvatar className="avatares">
                    <IonImg src={dani} alt="user"/>
                </IonAvatar>
                <IonCardHeader>
                    <IonCardTitle>Daniel Rodajo</IonCardTitle>
                </IonCardHeader>

                <IonCardContent>
                    Español de nacimiento, judio por narices.
                    Definitivamente culeable.
                </IonCardContent>
            </IonCard>
            <IonCard class="text">
                <IonAvatar className="avatares">
                    <IonImg src={raul} alt="user"/>
                </IonAvatar>
                <IonCardHeader>
                    <IonCardTitle>Raul Cadierno</IonCardTitle>
                </IonCardHeader>

                <IonCardContent>
                    Le dieron a elegir hable o calle para siempre y decidio ser calle para siempre.
                </IonCardContent>
            </IonCard>
        </React.Fragment>    
    )
}

export default Info;