import React from 'react';
import { IonPage, IonContent, IonText, IonAvatar, IonLabel, IonImg, IonButton } from '@ionic/react';
import Toolbar from '../../components/ToolBar/Toolbar';
import userdefault from "../../images/unnamed.jpg";
import 'react-circular-progressbar/dist/styles.css';
import './Profile.css';

const Profile: React.FC = () => (
    <IonPage>
        <Toolbar />
        <IonContent>
            <IonAvatar className="avatar">
                <IonImg src={userdefault} alt="user"/>
            </IonAvatar>
            <IonLabel className="namelabel">User Name</IonLabel>
            <IonButton className="botton">Configuracion</IonButton>            
        </IonContent>
    </IonPage>
)

export default Profile;