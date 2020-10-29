import React, { useState } from 'react';
import { IonPage, IonContent, IonAvatar, IonLabel, IonImg, IonButton, IonItemDivider, IonItem, IonIcon, IonToggle } from '@ionic/react';
import Toolbar from '../../components/ToolBar/Toolbar';
import userdefault from "../../images/unnamed.jpg";
import 'react-circular-progressbar/dist/styles.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { informationCircleOutline, moonOutline, settingsOutline } from 'ionicons/icons';
import AboutUs from './aboutus/AboutUs';
import './Profile.scss';
import Settings from './settings/Settings';
import SignOut from '../authentication/signout/SignOut';

interface props {
    darkMode: boolean,
    setDarkMode: (value: boolean) => void,
    handleSignOut: () => void
}

const Profile: React.FC<props> = props => {
    const user = useSelector((state: RootState) => state.AuthReducer.user);

    const toggleDarkModeHandler = (e: CustomEvent) => {
        props.setDarkMode(e.detail.checked);
    };
    const [ showModalAboutus, setShowModalAboutus ] = useState(false);
    const [ showModalSettings, setShowModalSettings ] = useState(false);

    return (
        <React.Fragment>
            <AboutUs showModal={showModalAboutus} setShowModal={setShowModalAboutus}/>
            <Settings showModal={showModalSettings} setShowModal={setShowModalSettings}/>
            <IonPage>
                <IonContent>
                    <Toolbar />
                    <IonAvatar className="avatar">
                        <IonImg src={userdefault} alt="user"/>
                    </IonAvatar>
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