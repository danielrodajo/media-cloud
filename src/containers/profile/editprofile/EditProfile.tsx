import { IonAvatar, IonButton, IonCol, IonGrid, IonIcon, IonImg, IonInput, IonItem, IonLabel, IonModal, IonRow } from '@ionic/react';
import { arrowBackOutline } from 'ionicons/icons';
import React, { useRef } from 'react';
import './EditProfile.scss'

interface props {
    showModal: boolean,
    setShowModal: (value: boolean) => void,
    image: any,
    user: any, 
    handleSaveChanges: (name: string, image: any) => void
}

const EditProfile: React.FC<props> = props => {

    const inputEmail = useRef(null);
    const inputUserName = useRef(null);

    return(
        <IonModal isOpen={props.showModal}>
            <IonItem button lines="none" onClick={() => props.setShowModal(false)}>
                <IonIcon slot="start" icon={arrowBackOutline}/>
                <IonLabel>Editar Perfil</IonLabel>
            </IonItem>
            <IonGrid className="ion-no-margin">
                <IonRow className="ion-justify-content-center ion-padding-vertical">
                    <IonAvatar className="edit-avatar">
                        <IonImg src={props.image}/>
                    </IonAvatar>
                </IonRow>
                <IonRow className="ion-padding-top">
                    <IonCol className="ion-no-padding">
                        <IonItem lines="inset" className="edit-item">
                            <IonLabel position="floating">Correo electronico</IonLabel>
                            <IonInput disabled={true} autocomplete="username" ref={inputEmail} type="email" name="email" value={props.user.attributes.email} />
                        </IonItem>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol className="ion-no-padding">
                        <IonItem lines="inset" className="edit-item">
                            <IonLabel position="floating">Nombre usuario</IonLabel>
                            <IonInput autocomplete="name" ref={inputUserName} type="text" name="username" value={props.user.attributes.name} />
                        </IonItem>
                    </IonCol>
                </IonRow>
                <IonRow className="ion-justify-content-center ion-padding-vertical">
                    <IonButton>Cambiar contraseña</IonButton>
                </IonRow>
                <IonRow className="ion-justify-content-center ion-padding-top">
                    <IonButton onClick={() => {}}>Guardar cambios</IonButton>
                </IonRow>
            </IonGrid>
        </IonModal>
    )
}

export default EditProfile;