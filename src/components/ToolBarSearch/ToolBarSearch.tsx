import React from 'react'
import { IonToolbar, IonSearchbar } from '@ionic/react';
import './ToolBarSearch.scss'

interface props {
    result: (text: string) => void,
    placeholder: string
}

const ToolbarSearch: React.FC<props> = props => {
    return ( 
        <IonToolbar>               
            <IonSearchbar placeholder={props.placeholder} onIonChange={e => props.result(e.detail.value!)}/>
        </IonToolbar>
    );
}

export default ToolbarSearch;