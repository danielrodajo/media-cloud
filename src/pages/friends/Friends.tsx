import React, { useState, useEffect, useCallback } from 'react';
import './Friends.scss';
import { IonPage, IonContent, IonText, IonItem } from '@ionic/react';
import Toolbar from '../../components/ToolBar/Toolbar';
import CustomSpinner from '../../components/CustomSpinner/CustomSpinner';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../store/actions/index';
import { RootState } from '../../store/store';
import Friend from '../../components/Friend/Friend';

export interface FriendsProps {
    
}
 
const Friends: React.SFC<FriendsProps> = () => {

    const dispatch = useDispatch();

    const user = useSelector((state: RootState) => state.AuthReducer.user);

    const [downloading, setDownloading] = useState(false);

    const onGetFriends = useCallback((userId: string) => dispatch(actions.getFriends(userId)), [dispatch]);

    const friends = useSelector((state: RootState) => state.FriendsReducer.friends);

    const recoverFriendsError = useSelector((state: RootState) => state.FriendsReducer.recoverFriendsError);

    useEffect(() => {
        onGetFriends(user.identityId);
    }, [onGetFriends])

    return (
        <IonPage>
            <Toolbar />
            <IonContent className="my-custom-content">
            {
                downloading ?
                <CustomSpinner />
                : (
                    <React.Fragment>
                        <IonItem lines="none" className="custom-friends-title">                
                            <IonText>Tus contactos</IonText>
                        </IonItem>
                    {recoverFriendsError ? <span>{recoverFriendsError.message}</span> : null}
                    {
                        friends.map((friend:any) => <Friend key={friend.id} friend={friend}/>)
                    }
                    </React.Fragment>
                )
                
            }
            </IonContent>
        </IonPage>
    );
}
 
export default Friends;