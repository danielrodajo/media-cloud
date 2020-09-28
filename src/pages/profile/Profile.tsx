import React from 'react';
import { IonPage, IonContent, IonText, IonAvatar, IonLabel, IonImg, IonButton, IonItemDivider, IonRippleEffect, IonNav, IonItem, IonIcon } from '@ionic/react';
import Toolbar from '../../components/ToolBar/Toolbar';
import userdefault from "../../images/unnamed.jpg";
import 'react-circular-progressbar/dist/styles.css';
import './Profile.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { colorPaletteOutline, informationCircleOutline } from 'ionicons/icons';
import './Profile.css';

const Profile: React.FC = () => {
    
    const user:any = useSelector((state: RootState) => state.AuthReducer.user);
    
    return (
        <React.Fragment>
            <IonPage>
                <IonContent>
                    <Toolbar />
                    <IonAvatar className="avatar">
                        <IonImg src={userdefault} alt="user"/>
                    </IonAvatar>
                    <IonLabel className="namelabel">{user.attributes.name}</IonLabel>
                    <IonButton className="botton">Edit profile</IonButton>
                    <IonItemDivider/>
                    <IonItem button href="/profile/theme">
                        <IonIcon slot="start" icon={colorPaletteOutline}/>
                        <IonLabel>
                            Theme
                        </IonLabel>
                    </IonItem>
                    <IonItem button href="/profile/aboutus">
                        <IonIcon slot="start" icon={informationCircleOutline}/>
                        <IonLabel>
                            About Us
                        </IonLabel>
                    </IonItem>            
                </IonContent>
            </IonPage>
        </React.Fragment>
    )
}

export default Profile;