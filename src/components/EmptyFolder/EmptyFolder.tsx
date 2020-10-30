import React from 'react';
import './EmptyFolder.scss';
import CustomAnimation from '../../components/CustomAnimation';
import emptyFolderAnimation from '../../Animations/emptyfolderanimation.json';
import { IonText } from '@ionic/react';

export interface EmptyFolderProps {
    
}
 
const EmptyFolder: React.SFC<EmptyFolderProps> = () => {
    return ( 
        <div className="center-empty-folder-div">
                <div className="empty-folder-div">
                    <CustomAnimation json={emptyFolderAnimation} loop={false}/>
                </div>
                <div className="center-text-empty-folder">
                    <IonText className="format-text3">No hay ficheros</IonText>
                </div> 
        </div>
     );
}
 
export default EmptyFolder;