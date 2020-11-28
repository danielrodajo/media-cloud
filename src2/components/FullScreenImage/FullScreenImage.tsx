import React from 'react';
import './FullScreenImage.scss';
import { IonModal } from '@ionic/react';
import ReactSimpleImageViewer from '../ImageViewer/ReactSimpleImageViewer';

export interface FullScreenImageProps {
    url: string,
    show: boolean,
    setShow: (value: boolean) => void
}
 
const FullScreenImage: React.FC<FullScreenImageProps> = props => {
 
    return ( 
        <IonModal isOpen={props.show}>
            <ReactSimpleImageViewer
                src={ [props.url] }
                onClose={ () => props.setShow(false)}
            />
        </IonModal>
     );
}
 
export default FullScreenImage;