import { IonAvatar, IonButton, IonCol, IonGrid, IonIcon, IonImg, IonInput, IonItem, IonLabel, IonModal, IonRow, IonSpinner, IonAlert } from '@ionic/react';
import { arrowBackOutline, closeCircleSharp } from 'ionicons/icons';
import React, { useRef, useState, useEffect } from 'react';
import './EditProfile.scss';
import userdefault from "../../../images/unnamed.jpg";
import { usePhotoGallery } from '../../../hooks/usePhotoGallery';

interface props {
    showModal: boolean,
    setShowModal: (value: boolean) => void,
    image: any,
    user: any, 
    handleSaveChanges: (name: string, image: any, deleting: boolean) => void
}

const EditProfile: React.FC<props> = props => {
    
    //Agregamos Hook para tomar una foto y guardarla
    const { photo, setPhoto, takePhoto } = usePhotoGallery();

    const inputEmail: any = useRef(null);
    const inputUserName: any = useRef(null);

    const [loading, setLoading] = useState(true);
    const [errorloading, setErrorLoading] = useState(false);
    const [deleteImage, setDeleteImage] = useState(false);
    const [currentImage, setCurrentImage] = useState(props.image);

    const [showAlert, setShowAlert] = useState(false);

    useEffect(() => {
        if (photo) {
            setDeleteImage(false);
            setCurrentImage(URL.createObjectURL(photo));
        }
    }, [photo]);

    return(
        <React.Fragment>
            <IonAlert
                isOpen={showAlert}
                onDidDismiss={() => setShowAlert(false)}
                cssClass="my-custom-class"
                header={"¿Quieres eliminar la foto de perfil?"}
                buttons={["No",
                    {
                    text: "Si",
                    role: "accept",
                    handler: () => {
                        setDeleteImage(true);
                        setPhoto(null);
                    },
                    },
                ]}
            />
            <IonModal isOpen={props.showModal}>
                <IonItem button lines="none" onClick={() => props.setShowModal(false)}>
                    <IonIcon slot="start" icon={arrowBackOutline}/>
                    <IonLabel>Editar Perfil</IonLabel>
                </IonItem>
                <IonGrid className="ion-no-margin">
                    <IonRow className="ion-justify-content-center ion-padding-vertical">
                        <IonAvatar className="edit-avatar">
                        {
                            currentImage ? 
                            <React.Fragment>
                                <IonSpinner color="tertiary" className={!loading ? "hide-img" : "default-spinner"} />
                                <IonImg onClick={takePhoto} className={loading || errorloading || deleteImage ? "hide-img" : "" } onIonImgDidLoad={() => setLoading(false)} 
                                onIonError={() => {setLoading(false); setErrorLoading(true)}} src={currentImage} />  
                                <IonImg onClick={takePhoto} className={errorloading || deleteImage ? "" : "hide-img"} src={userdefault}/>
                                {
                                    !loading && !deleteImage && currentImage &&
                                    <IonIcon className="remove-user-image" icon={closeCircleSharp} color="danger" onClick={() => setShowAlert(true)}/>
                                }
                            </React.Fragment>
                            :
                            <IonImg onClick={takePhoto} src={userdefault}/>                              
                        }
                            
                        </IonAvatar>
                    </IonRow>
                    <IonRow className="ion-padding-top ion-padding-bottom">
                        <IonCol>
                            <IonItem lines="inset" className="edit-item">
                                <IonLabel position="floating">Correo electronico</IonLabel>
                                <IonInput disabled={true} autocomplete="username" ref={inputEmail} type="email" name="email" value={props.user.attributes.email} />
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow className="ion-padding-top">
                        <IonCol>
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
                        <IonButton onClick={() => props.handleSaveChanges(inputUserName.current!.value, photo, deleteImage)}>Guardar cambios</IonButton>
                    </IonRow>
                </IonGrid>
            </IonModal>
        </React.Fragment>   
    )
}

export default EditProfile;