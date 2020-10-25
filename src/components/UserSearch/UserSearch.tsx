import React, { useState } from 'react';
import { IonAvatar, IonLabel, IonItem, IonImg, IonIcon, IonAlert } from '@ionic/react';
import DefaultAvatar from '../../default-images/default-avatar.png';
import { personAddOutline } from 'ionicons/icons';

interface props {
    friend: any,
    handleSendPetition: (friend: String) => void
}

const UserSearch: React.FC<props> = props => {

    const [showAlert, setShowAlert] = useState(false);

    return (
        <React.Fragment>
            <IonAlert
                isOpen={showAlert}
                onDidDismiss={() => setShowAlert(false)}
                cssClass="my-custom-class"
                header={"¿Quieres agregar a "+props.friend.name+"?"}
                buttons={["No",
                    {
                    text: "Si",
                    role: "accept",
                    handler: () => {
                        props.handleSendPetition(props.friend.id);
                    },
                    },
                ]}
            />
            <IonItem>
                <IonAvatar slot="start">
                    <IonImg src={DefaultAvatar} />
                </IonAvatar>
                <IonLabel>{props.friend.name}</IonLabel>
                <IonItem lines="none" button onClick={() => setShowAlert(true)}>
                    <IonIcon icon={personAddOutline}/>
                </IonItem>      
            </IonItem>
        </React.Fragment>
        
    );
}

export default UserSearch;