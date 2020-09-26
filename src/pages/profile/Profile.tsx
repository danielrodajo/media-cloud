import React from 'react';
import { IonPage, IonContent } from '@ionic/react';
import Toolbar from '../../components/ToolBar/Toolbar';
import 'react-circular-progressbar/dist/styles.css';
import './Profile.css';

const Profile: React.FC = () => {
    return (
        <IonPage>
            <Toolbar />
            <IonContent>
                
            </IonContent>
        </IonPage>
    );
}

export default Profile;