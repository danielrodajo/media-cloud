import React from 'react';
import { IonPage, IonContent, IonText } from '@ionic/react';
import Toolbar from '../../components/ToolBar/Toolbar';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './Profile.css';
import AnimatedCheckmark from '../../components/AnimatedCheckmark/AnimatedCheckmark';

const Profile: React.FC = () => (
    <IonPage>
        <Toolbar />
        <IonContent>
        </IonContent>
    </IonPage>
)

export default Profile;