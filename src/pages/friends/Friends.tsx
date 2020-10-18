import React from 'react';
import './Friends.scss';
import { IonPage, IonContent } from '@ionic/react';
import Toolbar from '../../components/ToolBar/Toolbar';

export interface FriendsProps {
    
}
 
const Friends: React.SFC<FriendsProps> = () => {
    return (
        <IonPage>
            <Toolbar />
            <IonContent>
                
            </IonContent>
        </IonPage>
    );
}
 
export default Friends;