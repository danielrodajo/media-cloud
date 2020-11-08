import React, { useState } from 'react';
import { IonPage, IonContent, IonAvatar, IonLabel, IonImg, IonButton, IonItemDivider, IonItem, IonIcon, IonToggle, IonSpinner, IonAlert, IonList } from '@ionic/react';
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
import * as actions from '../../store/actions/index';
import EditProfile from './editprofile/EditProfile';
import CustomLoading from '../../components/CustomLoading/CustomLoading';

interface props {
    darkMode: boolean,
    setDarkMode: (value: boolean) => void,
    handleSignOut: () => void
}

const Profile: React.FC<props> = props => {

    const dispatch = useDispatch();

    const [showAlert, setShowAlert] = useState(false);
    const [loading, setLoading] = useState(true);
    const [errorloading, setErrorLoading] = useState(false);

    const uploadUserImage = (name: string, file: File) => dispatch(actions.uploadUserImage(name, file));
    const removeUserImage = (name: string) => dispatch(actions.removeUserImage(name));
    const editUsername = (name: string) => dispatch(actions.editUsername(name));

    const uploadError = useSelector((state: RootState) => state.UserReducer.uploadError);
    const uploading = useSelector((state: RootState) => state.UserReducer.uploading);
    const downloading = useSelector((state: RootState) => state.UserReducer.downloading);
    const changing = useSelector((state: RootState) => state.AuthReducer.changingUsername);
    const removing = useSelector((state: RootState) => state.UserReducer.removing);
    const user = useSelector((state: RootState) => state.AuthReducer.user);
    const userImage: any = useSelector((state: RootState) => state.UserReducer.userImage);

    const toggleDarkModeHandler = (e: CustomEvent) => {
        props.setDarkMode(e.detail.checked);
    };
    const [ showModalAboutus, setShowModalAboutus ] = useState(false);
    const [ showModalSettings, setShowModalSettings ] = useState(false);
    const [ showModalEditProfile, setShowModalEditProfile] = useState(false);

    const editProfile = (name: string, file: any, deleting: boolean) => {
        if (user.attributes.name !== name)
            editUsername(name);
        
        if (userImage && deleting) {
            removeUserImage(user.identityId);
        } else if (file) {
             //Subir el fichero a S3
            uploadUserImage(user.identityId, file as File);
        }
    }

    return (
        <React.Fragment>
            <CustomLoading showLoading={uploading || changing ||removing}/>
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
                        removeUserImage(user.identityId)
                    },
                    },
                ]}
            />
            {
                (uploadError) ? <p>{uploadError}</p> : null
            }     
            <AboutUs showModal={showModalAboutus} setShowModal={setShowModalAboutus}/>
            <Settings showModal={showModalSettings} setShowModal={setShowModalSettings}/>
            <EditProfile 
                showModal={showModalEditProfile} 
                setShowModal={setShowModalEditProfile} 
                image={userImage} user={user} 
                handleSaveChanges={editProfile}
            />
            <IonPage>
                <IonContent>
                    <Toolbar />
                    <IonAvatar style={{"position": "relative"}} className="avatar center-spinner">
                        {
                            downloading ? 
                            <IonSpinner color="tertiary" className="default-spinner" />
                            : 
                                <React.Fragment>
                                {
                                    userImage ?
                                    <React.Fragment>
                                        <IonSpinner color="tertiary" className={!loading ? "hide-img" : "default-spinner"} />
                                        <IonImg className={loading || errorloading ? "hide-img" : "" } onIonImgDidLoad={() => setLoading(false)} 
                                        onIonError={() => {setLoading(false); setErrorLoading(true)}} src={userImage} />  
                                        <IonImg className={errorloading ? "" : "hide-img"} src={userdefault}/>
                                    </React.Fragment>
                                    :
                                    <IonImg src={userdefault}/>
                                }                              
                                </React.Fragment>
                            }
                       
                    </IonAvatar>
                    <IonLabel className="namelabel">{user.attributes.name}</IonLabel>
                    <IonButton className="botton" onClick={() => setShowModalEditProfile(true)}>Editar perfil</IonButton>
                    <IonItemDivider/>
                    <IonList>
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
                    </IonList>
                    <SignOut handleSignOut={props.handleSignOut}/>             
                </IonContent>
            </IonPage>
        </React.Fragment>
    )
}

export default Profile;