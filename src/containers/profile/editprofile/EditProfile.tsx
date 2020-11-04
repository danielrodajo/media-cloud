import { IonAvatar, IonContent, IonIcon, IonImg, IonItem, IonLabel, IonModal } from '@ionic/react';
import { arrowBackOutline } from 'ionicons/icons';
import React from 'react';

interface props {
    showModal: boolean,
    setShowModal: (value: boolean) => void
}

const EditProfile: React.FC<props> = props => {

    return(
        <React.Fragment>
            <IonContent>
                <IonModal isOpen={props.showModal}>
                    <IonItem button onClick={() => props.setShowModal(false)}>
                        <IonIcon slot="start" icon={arrowBackOutline}/>
                        <IonLabel>Editar Perfil</IonLabel>
                    </IonItem> 
                    <IonAvatar>
                        <IonImg></IonImg>
                    </IonAvatar>
                </IonModal>
            </IonContent>
        </React.Fragment>
    )
}

export default EditProfile;