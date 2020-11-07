import React, { useState, useEffect } from 'react';
import { IonLabel, IonItem, IonIcon, IonAlert } from '@ionic/react';
import { personAddOutline } from 'ionicons/icons';
import { Storage } from 'aws-amplify';
import UserImageAvatar from '../UserImageAvatar/UserImageAvatar';

interface props {
    friend: any,
    handleSendPetition: (friend: String) => void,
    hasUserImage: boolean,
}

const UserSearch: React.FC<props> = props => {

    const [showAlert, setShowAlert] = useState(false);
    const [userImage, setUserImage] = useState("");

    const downloadUserImage = () => {
        if (props.hasUserImage) {
            Storage.get(props.friend.id, {level: 'public'})
            .then((result: any) => {
                setUserImage(result);
            })
            .catch(err => console.log(err))
        } 
    };

    useEffect(() => {
        downloadUserImage();
    }, []);
    

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
                <UserImageAvatar urlImage={userImage}/>
                <IonLabel>{props.friend.name}</IonLabel>
                <IonItem lines="none" button onClick={() => setShowAlert(true)}>
                    <IonIcon icon={personAddOutline}/>
                </IonItem>      
            </IonItem>
        </React.Fragment>
        
    );
}

export default UserSearch;