import React, { useState, useEffect } from 'react';
import './FriendPetition.scss'
import { IonItem, IonText, IonIcon, IonGrid, IonRow, IonCol, IonToast, IonAlert } from '@ionic/react';
import { checkmarkCircleOutline, closeCircleOutline, checkmarkCircle, closeSharp, checkmark, checkmarkSharp } from 'ionicons/icons';
import UserImageAvatar from '../../../UserImageAvatar/UserImageAvatar';
import { Storage } from 'aws-amplify';
import { parseDate } from '../../../shared/utility';

export interface FriendPetitionProps {
    notification: any,
    handleCheckPetition: (notification: any) => void,
    handleDenyPetition: (notification: any) => void
    hasUserImage: boolean,
}
 
const FriendPetition: React.SFC<FriendPetitionProps> = props => {

    const [showAlert, setShowAlert] = useState(false);
    const [showAlert1, setShowAlert1] = useState(false);
    const [userImage, setUserImage] = useState("");

    useEffect(() => {
        if (props.hasUserImage) {
            Storage.get(props.notification.from.id, {level: 'public'})
            .then((result: any) => {
                setUserImage(result);
            })
            .catch(err => console.log(err))
        }
    });

    return (    
        <React.Fragment>
            <IonAlert
                isOpen={showAlert}
                onDidDismiss={() => setShowAlert(false)}
                cssClass="my-custom-class"
                header={"¿Quieres agregar a "+props.notification.from.name+"?"}
                buttons={["No",
                    {
                    text: "Si",
                    role: "accept",
                    handler: () => {
                        props.handleCheckPetition(props.notification);
                    },
                    },
                ]}
            />
            <IonAlert
                isOpen={showAlert1}
                onDidDismiss={() => setShowAlert1(false)}
                cssClass="my-custom-class"
                header={"¿Quieres rechazar a "+props.notification.from.name+"?"}
                buttons={["No",
                    {
                    text: "Si",
                    role: "accept",
                    handler: () => {
                        props.handleDenyPetition(props.notification);
                    },
                    },
                ]}
            />
            <IonItem>
                <UserImageAvatar urlImage={userImage}/>
                <IonGrid className="custom-notification-grid">
                        <IonRow>
                            <IonCol>
                                <IonText className="custom-notification-title">Petición de amistad</IonText>
                                <br/>
                                <IonText><span className="custom-text">{props.notification.from.name}</span> te ha enviado una petición de amistad.</IonText>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol className="custom-col-fp">
                                <IonItem button lines="none" className="custom-friend-petition-icon" onClick={() => setShowAlert1(true)}>
                                    <IonIcon color="danger" icon={closeSharp} />
                                </IonItem>
                                <IonItem button lines="none" className="custom-friend-petition-icon" onClick={() => setShowAlert(true)}>
                                    <IonIcon color="success" icon={checkmarkSharp} />
                                </IonItem>
                                <IonText className="custom-parse-notification-date custom-text-date-fp">{parseDate(props.notification.createdOn)}</IonText>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
            </IonItem>
        </React.Fragment> 
    
    );
}
 
export default FriendPetition;