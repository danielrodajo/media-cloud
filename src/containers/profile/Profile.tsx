import React, { useState, useEffect } from 'react';
import { IonPage, IonContent, IonAvatar, IonLabel, IonImg, IonButton, IonItemDivider, IonItem, IonIcon, IonToggle, IonText, IonSpinner } from '@ionic/react';
import Toolbar from '../../components/ToolBar/Toolbar';
import userdefault from "../../images/unnamed.jpg";
import 'react-circular-progressbar/dist/styles.css';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { informationCircleOutline, moonOutline, settingsOutline } from 'ionicons/icons';
import AboutUs from './aboutus/AboutUs';
import './Profile.scss';
import Settings from './settings/Settings';
import SignOut from '../authentication/signout/SignOut';
import { usePhotoGallery } from '../../hooks/usePhotoGallery';
import * as actions from '../../store/actions/index';
import Popover from '../add/PopoverUpload/PopoverUpload';

interface props {
    darkMode: boolean,
    setDarkMode: (value: boolean) => void,
    handleSignOut: () => void
}

const Profile: React.FC<props> = props => {

    const dispatch = useDispatch();

    const uploadUserImage = (name: string, file: File) => dispatch(actions.uploadUserImage(name, file));
    const uploadError = useSelector((state: RootState) => state.UserReducer.uploadError);
    const uploading = useSelector((state: RootState) => state.UserReducer.uploading);
    const success = useSelector((state: RootState) => state.UserReducer.uploadSuccess);
    const downloading = useSelector((state: RootState) => state.UserReducer.downloading);

    const loadedUserImage = useSelector((state: RootState) => state.UserReducer.loadedUserImage);
    const totalUserImage = useSelector((state: RootState) => state.UserReducer.totalUserImage);

    const user = useSelector((state: RootState) => state.AuthReducer.user);

    const userImage: any = useSelector((state: RootState) => state.UserReducer.userImage);
    
    //Agregamos Hook para tomar una foto y guardarla
    const { photo, setPhoto, takePhoto } = usePhotoGallery();

    const toggleDarkModeHandler = (e: CustomEvent) => {
        props.setDarkMode(e.detail.checked);
    };
    const [ showModalAboutus, setShowModalAboutus ] = useState(false);
    const [ showModalSettings, setShowModalSettings ] = useState(false);

    const submitPhoto = async() => {
        //Subir el fichero a S3
        uploadUserImage(user.identityId, photo as File);
        //Vaciar campo despues de enviarlo
        setPhoto(null);
    }

    useEffect(() => {
        if (photo)
            submitPhoto();
    },[photo]);

    return (
        <React.Fragment>
            {
                (uploadError) ? <p>{uploadError}</p> : null
            }       
            <Popover 
                loadedFile = {loadedUserImage}
                totalFile = {totalUserImage}
                uploading = {uploading}
                success = {success}
            />
            <AboutUs showModal={showModalAboutus} setShowModal={setShowModalAboutus}/>
            <Settings showModal={showModalSettings} setShowModal={setShowModalSettings}/>
            <IonPage>
                <IonContent>
                    <Toolbar />
                    <IonAvatar className="avatar center-spinner" onClick={takePhoto}>
                        {
                            downloading ? 
                            <IonSpinner color="tertiary" className="default-spinner" />
                            : <IonImg src={userImage ? userImage : userdefault} alt="user"/>
                        }
                        
                    </IonAvatar>
                    {
                        (photo) ?
                        <IonText>Elegido</IonText>
                        : null
                    }
                    <IonLabel className="namelabel">{user.attributes.name}</IonLabel>
                    <IonButton className="botton">Editar perfil</IonButton>
                    <IonItemDivider/>
                    <IonItem className="darkmode">
                        <IonIcon slot="start" icon={moonOutline} />
                        <IonLabel>Modo oscuro</IonLabel>
                        <IonToggle slot="end" name="darkMode" checked={props.darkMode} onIonChange={toggleDarkModeHandler}/>
                    </IonItem>
                    <IonItem button onClick={() => setShowModalSettings(true)}>
                        <IonIcon slot="start" icon={settingsOutline}/>
                        <IonLabel>
                            Ajustes
                        </IonLabel>
                    </IonItem>
                    <IonItem button onClick={() => setShowModalAboutus(true)}>
                        <IonIcon slot="start" icon={informationCircleOutline}/>
                        <IonLabel>
                            Sobre nosotros
                        </IonLabel>
                    </IonItem>
                    <SignOut handleSignOut={props.handleSignOut}/>             
                </IonContent>
            </IonPage>
        </React.Fragment>
    )
}

export default Profile;