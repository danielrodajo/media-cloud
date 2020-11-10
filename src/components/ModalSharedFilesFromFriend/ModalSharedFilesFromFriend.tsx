import React, { useEffect, useCallback } from 'react';
import './ModalSharedFilesFromFriend.scss';
import { IonModal, IonHeader, IonToolbar, IonText, IonItem, IonIcon, IonContent } from '@ionic/react';
import { arrowDown } from 'ionicons/icons';
import * as actions from "../../store/actions/index";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import ShareFileBox from '../ShareFileBox/ShareFileBox';
import CustomSpinner from '../CustomSpinner/CustomSpinner';
import CustomAnimation from '../CustomAnimation';
import noFriendsAnimation from '../../Animations/nofriendsanimation.json';

export interface ModalSharedFilesFromFriendProps {
    showModal: boolean;
    setShowModal: (show: boolean) => void,
    friend: any
}
 
const ModalSharedFilesFromFriend: React.SFC<ModalSharedFilesFromFriendProps> = props => {
    const dispatch = useDispatch();
    const user = useSelector((state: RootState) => state.AuthReducer.user);
    const recoverSharedFilesFromFriend = useCallback((userId: String, friendId: String) => dispatch(actions.recoverShareFiles(userId, friendId)), [dispatch]);
    const files = useSelector((state: RootState) => state.ShareFileReducer.files);
    const downloading = useSelector((state: RootState) => state.ShareFileReducer.downloading);

    useEffect(() => {
        if (props.showModal) {
            recoverSharedFilesFromFriend(user.identityId, props.friend.originalId);
        }
            
    }, [props.showModal,user.identityId, props.friend.originalId, recoverSharedFilesFromFriend]);

    return (
        <IonModal isOpen={props.showModal} onDidDismiss={e => props.setShowModal(false)}>
            <IonHeader>
                <IonToolbar className="vertical-align">
                    <IonItem lines="none">
                        <IonText className="custom-title-modal-shared-friend hide-overflow-text">
                            Archivos compartidos de <span className="custom-bold-modal-shared-friend">{props.friend.name}</span>
                        </IonText>
                    </IonItem>
                    <IonItem slot="start" button className="custom-button" lines="none" onClick={e => props.setShowModal(false)}>
                        <IonIcon icon={arrowDown} />
                    </IonItem>
                    
                </IonToolbar>
            </IonHeader>
            <IonContent className="my-custom-content">
            {
                downloading ?
                <CustomSpinner />
                : (
                    files.length === 0 ? 
                        <div className="center-empty-search-div">
                            <CustomAnimation json={noFriendsAnimation} loop={false}/>
                            <IonText className="format-text-notifications">No ha compartido archivos contigo</IonText>
                        </div>
                    : 
                        files.map((file: any) => 
                        <ShareFileBox
                        key={file.key}
                        file={file}
                        />
                    )
                )
                
            }
            </IonContent>
        </IonModal>
    );
}
 
export default ModalSharedFilesFromFriend;