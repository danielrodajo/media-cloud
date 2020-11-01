import React from 'react';
import { IonGrid, IonRow, IonCol, IonText, IonItem, IonIcon } from '@ionic/react';
import { checkmarkOutline, closeOutline, cloudUploadSharp, trashSharp } from 'ionicons/icons';
import './DisplaySelectFile.css';

interface props {
    file: File,
    submit: (event: React.MouseEvent<HTMLIonItemElement, MouseEvent>) => void,
    reset: () => void,
}

const DisplaySelectFile: React.FC<props> = props => {
    return (
        <IonGrid className="ion-no-margin ion-margin-start">
            <IonRow>
                <IonCol>
                    <IonItem color="" lines="none" className="ion-float-left custom-display-select-file">
                        <IonText className="fullheight xc hide-overflow-text">
                            {
                                props.file.name
                            }
                        </IonText>
                    </IonItem>
                    <IonItem className="ion-float-left" lines="none">
                        <IonItem button onClick={props.submit} className="ion-float-right" lines="none">
                            <IonIcon color="secondary" icon={cloudUploadSharp} />
                        </IonItem>
                        <IonItem button onClick={props.reset} className="ion-float-right" lines="none">
                            <IonIcon icon={trashSharp} />
                        </IonItem>
                    </IonItem>
                </IonCol>
            </IonRow>
        </IonGrid>
    );
}

export default DisplaySelectFile;