import React, { useState, useEffect } from 'react';
import { IonAvatar, IonLabel, IonItem, IonImg, IonIcon, IonAlert, IonSpinner } from '@ionic/react';
import DefaultAvatar from '../../default-images/default-avatar.png';
import { personAddOutline } from 'ionicons/icons';
import { Storage } from 'aws-amplify';

interface props {
    friend: any,
    handleSendPetition: (friend: String) => void,
    setLoading: (value: boolean) => void,
    hasUserImage: boolean,
}

const UserSearch: React.FC<props> = props => {

    const [showAlert, setShowAlert] = useState(false);
    const [userImage, setUserImage] = useState(null);
    const [errorloading, setErrorLoading] = useState(false);

    useEffect(() => {
        props.setLoading(true);
        if (props.hasUserImage) {
            Storage.get(props.friend.id, {level: 'public'})
            .then((result: any) => {
                setUserImage(result);
            })
            .catch(err => console.log(err))
        } 
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
            <IonAvatar slot="start">
                <IonImg className={errorloading ? "hide-img" : "" } onIonImgDidLoad={() => props.setLoading(false)} 
                onIonError={() => {props.setLoading(false); setErrorLoading(true)}} 
                    src={userImage ? userImage! : DefaultAvatar} />  
                <IonImg className={errorloading ? "" : "hide-img"} src={DefaultAvatar}/>
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