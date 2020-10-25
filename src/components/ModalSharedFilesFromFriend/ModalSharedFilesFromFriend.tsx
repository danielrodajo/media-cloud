import React from 'react';
import './ModalSharedFilesFromFriend.scss';
import { IonModal, IonHeader, IonToolbar, IonText, IonItem, IonIcon, IonContent } from '@ionic/react';
import { arrowDown } from 'ionicons/icons';
import * as actions from "../../store/actions/index";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import ShareFileBox from '../ShareFileBox/ShareFileBox';

export interface ModalSharedFilesFromFriendProps {
    showModal: boolean;
    setShowModal: (show: boolean) => void,
    friend: any
}
 
const ModalSharedFilesFromFriend: React.SFC<ModalSharedFilesFromFriendProps> = props => {
    const dispatch = useDispatch();
    const user = useSelector((state: RootState) => state.AuthReducer.user);
    const recoverSharedFilesFromFriend = (userId: String, friendId: String) => dispatch(actions.recoverShareFiles(userId, friendId));
    const files = useSelector((state: RootState) => state.ShareFileReducer.files);

    recoverSharedFilesFromFriend(user.identityId, props.friend.originalId);


    return (
        <IonModal isOpen={props.showModal} onDidDismiss={e => props.setShowModal(false)}>
            <IonHeader>
                <IonToolbar className="vertical-align">
                    <IonText className="custom-title-modal-shared-friend">
                        Archivos de <span className="custom-bold-modal-shared-friend">{props.friend.name}</span>
                    </IonText>
                    <IonItem button className="custom-button" lines="none" onClick={e => props.setShowModal(false)}>
                        <IonIcon icon={arrowDown} />
                    </IonItem>
                </IonToolbar>
            </IonHeader>
            <IonContent>
            {
                files.map((file: any) => 
                    <ShareFileBox
                      key={file.key}
                      file={file}
                    />
                )
            }
            </IonContent>
        </IonModal>
    );
}
 
export default ModalSharedFilesFromFriend;