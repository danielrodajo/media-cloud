import React from 'react';
import './EmptyFolderRecent.scss';
import { IonText } from '@ionic/react';

export interface EmptyFolderRecentProps {
    
}
 
const EmptyFolderRecent: React.SFC<EmptyFolderRecentProps> = () => {
    return ( 
        <React.Fragment>
            <IonText>¡Aún no has subido nada!</IonText>
            <br/>
            <IonText>Pulsa el boton X para subir algo</IonText>
        </React.Fragment>
     );
}
 
export default EmptyFolderRecent;