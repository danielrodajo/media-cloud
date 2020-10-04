import React, { useState } from 'react';
import { IonPage, IonContent, IonAvatar, IonLabel, IonImg, IonButton, IonItemDivider, IonItem, IonIcon, IonToggle } from '@ionic/react';
import Toolbar from '../../components/ToolBar/Toolbar';
import userdefault from "../../images/unnamed.jpg";
import 'react-circular-progressbar/dist/styles.css';
import './Profile.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { informationCircleOutline, moonOutline, settingsOutline } from 'ionicons/icons';
import AboutUs from './aboutus/AboutUs';
import './Profile.css';
import Settings from './settings/Settings';

const Profile: React.FC = () => {
    
    const user = useSelector((state: RootState) => state.AuthReducer.user);
    const toggleDarkModeHandler = () => {
        document.body.classList.toggle("dark");
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
                    <IonItem>
                        <IonIcon slot="start" icon={moonOutline} />
                        <IonLabel>Modo oscuro</IonLabel>
                        <IonToggle slot="end" name="darkMode" onIonChange={toggleDarkModeHandler}/>
                    </IonItem>
                    <IonItem button onClick={() => setShowModalAboutus(true)}>
                        <IonIcon slot="start" icon={informationCircleOutline}/>
                        <IonLabel>
                            Sobre nosotros
                        </IonLabel>
                    </IonItem>
                    <IonItem button onClick={() => setShowModalSettings(true)}>
                        <IonIcon slot="start" icon={settingsOutline}/>
                        <IonLabel>
                            Ajustes
                        </IonLabel>
                    </IonItem>            
                </IonContent>
            </IonPage>
        </React.Fragment>
    )
}

export default Profile;