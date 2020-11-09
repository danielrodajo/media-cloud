import React, { useState } from 'react';
import './FolderMenu.scss';
import { IonAlert, IonGrid, IonRow, IonCol, IonItem, IonIcon, IonTitle, IonToast } from '@ionic/react';
import { returnUpBackOutline, trashOutline } from 'ionicons/icons';

export interface FolderMenuProps {
    handleRemoveFolder: (path: string) => void,
    handleReturnFolder: (path: string) => void,
    currentPath: string,
}
 
const FolderMenu: React.SFC<FolderMenuProps> = props => {
    
    const [showAlert, setShowAlert] = useState(false);
    const [showToast1, setShowToast1] = useState(false);
    
    return ( 
        <React.Fragment>
            <IonAlert
            isOpen={showAlert}
            onDidDismiss={() => setShowAlert(false)}
            cssClass="my-custom-class"
            subHeader={"¿Deseas borrar la carpeta y todo su contenido?"}
            message={"Perderás todo el contenido de la carpeta y subcarpetas."}
            buttons={["Cancelar",
                {
                text: "Aceptar",
                role: "accept",
                handler: () => {
                    props.handleRemoveFolder(props.currentPath + "/default");
                },
                },
            ]}
            />
            <IonGrid>
            <IonToast
                isOpen={showToast1}
                onDidDismiss={() => setShowToast1(false)}
                message={props.currentPath.substring(1, props.currentPath.length)}
                duration={2000}
                position="top"
            />
                <IonRow className="ion-text-center">
                    <IonCol size="2">
                        <IonItem
                            lines="none"
                            button
                            onClick={(e) => props.handleReturnFolder(props.currentPath)}>
                            <IonIcon icon={returnUpBackOutline} color="primary"/>
                        </IonItem>
                    </IonCol>
                    <IonCol size="8">
                        <IonItem lines="none" onClick={() => setShowToast1(true)}>
                            <IonTitle className="ion-text-center hide-overflow-text ion-no-padding">
                            {props.currentPath.substring(1, props.currentPath.length)}
                            </IonTitle>
                        </IonItem>
                    </IonCol>
                    <IonCol size="2">
                        <IonItem
                            lines="none"
                            button
                            onClick={(e) => setShowAlert(true)}>
                            <IonIcon icon={trashOutline} color="danger"/>
                        </IonItem>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </React.Fragment>
     );
}
 
export default FolderMenu;