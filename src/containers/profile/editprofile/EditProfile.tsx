import { IonAvatar, IonButton, IonCol, IonGrid, IonIcon, IonImg, IonInput, IonItem, IonLabel, IonModal, IonRow, IonSpinner, IonAlert } from '@ionic/react';
import { arrowBackOutline, closeCircleSharp, createOutline } from 'ionicons/icons';
import React, { useRef, useState, useEffect } from 'react';
import './EditProfile.scss';
import userdefault from "../../../images/unnamed.jpg";
import { usePhotoGallery } from '../../../hooks/usePhotoGallery';
import ChangePassword from './changepassword/ChangePassword';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../../store/actions/index';
import { RootState } from '../../../store/store';

interface props {
    showModal: boolean,
    setShowModal: (value: boolean) => void,
    showChangeModal: boolean,
    setShowChangeModal: (value: boolean) => void,
    image: any,
    user: any, 
    handleSaveChanges: (name: string, image: any, deleting: boolean) => void,
    handleChangePassword: (password: string, code: string) => void,
}

const EditProfile: React.FC<props> = props => {

    const dispatch = useDispatch();

    const forgotPassword = (username: string) => dispatch(actions.forgotPassword(username));

    const user = useSelector((state:RootState) => state.AuthReducer.user);
    
    //Agregamos Hook para tomar una foto y guardarla
    const { photo, setPhoto, takePhoto } = usePhotoGallery();

    const inputEmail: any = useRef(null);
    const inputUserName: any = useRef(null);

    const [loading, setLoading] = useState(true);
    const [errorloading, setErrorLoading] = useState(false);
    const [deleteImage, setDeleteImage] = useState(false);
    const [currentImage, setCurrentImage] = useState(props.image);

    const [showDeleteAlert, setShowDeleteAlert] = useState(false);

    useEffect(() => {
        if (props.image)
            setCurrentImage(props.image)
    }, [props.image]);
    
    const changePassword = () => {
        forgotPassword(user.attributes.email);
        props.setShowChangeModal(true);
    }

    useEffect(() => {
        if (photo) {
            setDeleteImage(false);
            setCurrentImage(URL.createObjectURL(photo));
        }
    }, [photo]);

    return(
        <React.Fragment>
            <IonAlert
                isOpen={showDeleteAlert}
                onDidDismiss={() => setShowDeleteAlert(false)}
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
                    }
                ]}
            />
            <ChangePassword handleChangePassword={props.handleChangePassword} showModal={props.showChangeModal} setShowModal={props.setShowChangeModal}/>
            <IonModal isOpen={props.showModal}>
                <IonItem button lines="none" onClick={() => props.setShowModal(false)}>
                    <IonIcon slot="start" icon={arrowBackOutline}/>
                    <IonLabel>Editar Perfil</IonLabel>
                </IonItem>
                <IonGrid className="ion-no-margin">
                    <IonRow className="ion-justify-content-center ion-padding-vertical">
                        <IonAvatar className="edit-avatar">
                            <div className="edit-avatar-membrane" onClick={takePhoto}>
                                <IonIcon icon={createOutline}/>
                            </div>
                            <IonAvatar className="edit-avatar">
                            {
                                currentImage ? 
                                <React.Fragment>
                                    <IonSpinner color="tertiary" className={!loading ? "hide-img" : "default-spinner"} />
                                    <IonImg className={loading || errorloading || deleteImage ? "hide-img" : "" } onIonImgDidLoad={() => setLoading(false)} 
                                    onIonError={() => {setLoading(false); setErrorLoading(true)}} src={currentImage} />  
                                    <IonImg className={errorloading || deleteImage ? "" : "hide-img"} src={userdefault}/>
                                    {
                                        !loading && !deleteImage && currentImage &&
                                        <IonIcon className="remove-user-image" icon={closeCircleSharp} color="danger" onClick={() => setShowDeleteAlert(true)}/>
                                    }
                                </React.Fragment>
                                :
                                <IonImg onClick={takePhoto} src={userdefault}/>                              
                            }
                            </IonAvatar>
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
                    <IonRow>
                        <IonCol>
                            <IonItem lines="inset" className="edit-item">
                                <IonLabel position="floating">Nombre usuario</IonLabel>
                                <IonInput autocomplete="name" ref={inputUserName} type="text" name="username" value={props.user.attributes.name} />
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow className="ion-justify-content-center ion-padding-vertical">
                        <IonButton onClick={() => changePassword()}>Cambiar contraseña</IonButton>
                    </IonRow>
                    <IonRow className="ion-justify-content-center">
                        <IonButton onClick={() => {
                                props.handleSaveChanges(inputUserName.current!.value.toLowerCase(), photo, deleteImage)
                                setPhoto(null);
                            }}>Guardar cambios</IonButton>
                    </IonRow>
                </IonGrid>
            </IonModal>
        </React.Fragment>   
    )
}

export default EditProfile;