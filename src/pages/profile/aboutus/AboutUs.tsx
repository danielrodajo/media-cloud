import { IonItem, IonIcon, IonLabel, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonAvatar, IonImg, IonContent, IonModal } from '@ionic/react';
import { arrowBackOutline } from 'ionicons/icons';
import React from 'react'
import './AboutUs.scss'
import dani from "../../../images/dani.jpg";
import raul from "../../../images/raul.jpg";

interface props {
    showModal: boolean
    setShowModal: (value: boolean) => void
}

const Info: React.FC<props> = props => {
    
    
    
    return (
        <React.Fragment>
            <IonContent>
                <IonModal isOpen={props.showModal} cssClass="fullheight">
                    <IonItem button onClick={() => props.setShowModal(false)}>
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
                </IonModal>
            </IonContent>
        </React.Fragment>    
    )
}

export default Info;