import React, { useState } from 'react';
import './Friend.scss';
import { IonItem, IonAvatar, IonLabel, IonImg, IonIcon, IonAlert } from '@ionic/react';
import DefaultAvatar from '../../default-images/default-avatar.png';
import { personRemove, shareSocial } from 'ionicons/icons';
import ModalSharedFilesFromFriend from '../ModalSharedFilesFromFriend/ModalSharedFilesFromFriend';

export interface FriendProps {
    friend: any,
    handleDeleteFriend: (idFriend: string, originalId: string) => void 
}
 
const Friend: React.SFC<FriendProps> = props => {

    const [showAlert, setShowAlert] = useState(false);
    const [showModal, setShowModal] = useState(false);

    return (
        <React.Fragment>
            <IonAlert
                isOpen={showAlert}
                onDidDismiss={() => setShowAlert(false)}
                cssClass="my-custom-class"
                header={"¿Quieres eliminar a "+props.friend.name+"?"}
                buttons={["No",
                    {
                    text: "Si",
                    role: "accept",
                    handler: () => {
                        props.handleDeleteFriend(props.friend.id, props.friend.originalId)
                    },
                    },
                ]}
            />
            <ModalSharedFilesFromFriend friend={props.friend} showModal={showModal} setShowModal={setShowModal}/>
            <IonItem className="darkmode">       
                <IonAvatar slot="start">
                    <IonImg src={DefaultAvatar} />
                </IonAvatar>
                <IonLabel>{props.friend.name}</IonLabel>     
                <IonItem button lines="none" onClick={() => {setShowModal(true)}}>      
                    <IonIcon icon={shareSocial} color="success"/>
                </IonItem>
                <IonItem button lines="none" className="custom-notification-close" onClick={() => setShowAlert(true)}>
                    <IonIcon icon={personRemove} />
                </IonItem>
            </IonItem>
        </React.Fragment>
    );
}
 
export default Friend;