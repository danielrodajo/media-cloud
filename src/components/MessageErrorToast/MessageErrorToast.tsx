import React, { useState, useEffect } from 'react';
import './MessageErrorToast.scss';
import { IonToast } from '@ionic/react';

export interface MessageErrorToastProps {
    message?: string
}
 
const MessageErrorToast: React.SFC<MessageErrorToastProps> = props => {
    
    const [showToast, setShowToast] = useState(false);

    useEffect(() => {
        if(props.message){
            setShowToast(true);
        }
    }, [props.message])
    
    return ( 
        <IonToast 
            isOpen={showToast}
            onDidDismiss={() => setShowToast(false)}
            message= {(props.message) ? props.message : ""}
            duration={1000}
            position="top"/>
     );
}
 
export default MessageErrorToast;