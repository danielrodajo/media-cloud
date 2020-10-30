import React from 'react';
import './EmptyFolderRecent.scss';
import { IonText } from '@ionic/react';
import CustomAnimation from '../CustomAnimation';
import addButtonAnimation from '../../Animations/addbuttonanimation.json';

export interface EmptyFolderRecentProps {
    showAddModal: (value: boolean) => void
}
 
const EmptyFolderRecent: React.SFC<EmptyFolderRecentProps> = props => {
    return ( 
        <div className="center-empty-folder-div">
            <IonText className="format-text4">¡Aún no has subido nada!</IonText>
            <br/>
            <IonText className="format-text4">Pulsa el botón</IonText>
            <div className="custom-div-add-button-animation" onClick={() => props.showAddModal(true)}>
                <CustomAnimation json={addButtonAnimation} loop={false}/>
            </div>       
            <IonText className="format-text4">para subir algo</IonText>
        </div>
     );
}
 
export default EmptyFolderRecent;