import React from 'react';
import { IonPage, IonContent, IonText } from '@ionic/react';
import Toolbar from '../../components/ToolBar/Toolbar';

const Profile: React.FC = () => (
    <IonPage>
        <Toolbar>
            <IonContent>
                <IonText>
                    Profile
                </IonText>
            </IonContent>
        </Toolbar>
    </IonPage>
)

export default Profile;