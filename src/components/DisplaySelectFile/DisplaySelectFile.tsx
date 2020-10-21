import React from 'react';
import { IonGrid, IonRow, IonCol, IonText, IonItem, IonIcon } from '@ionic/react';
import { checkmarkOutline, closeOutline } from 'ionicons/icons';

interface props {
    file: File,
    submit: (event: React.MouseEvent<HTMLIonItemElement, MouseEvent>) => void,
    reset: () => void,
}

const DisplaySelectFile: React.FC<props> = props => {
    return (
        <IonGrid className="ion-no-margin ion-margin-start">
            <IonRow>
                <IonCol size="6">
                    <IonText className="fullheight xc hide-overflow-text">
                        {
                            props.file.name
                        }
                    </IonText>
                </IonCol>
                <IonCol>
                    <IonItem button onClick={props.submit} className="ion-float-left" lines="none">
                        <IonIcon icon={checkmarkOutline} />
                    </IonItem>
                    <IonItem button onClick={props.reset} className="ion-float-left" lines="none">
                        <IonIcon icon={closeOutline} />
                    </IonItem>
                </IonCol>
            </IonRow>
        </IonGrid>
    );
}

export default DisplaySelectFile;