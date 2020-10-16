import React from 'react'
import { IonToolbar, IonSearchbar } from '@ionic/react';
import './ToolBarSearch.scss'

interface props {
    result: (text: String) => void
}

const ToolbarSearch: React.FC<props> = props => {
    return ( 
        <IonToolbar>               
            <IonSearchbar placeholder="Búsqueda de usuarios" onIonChange={e => props.result(e.detail.value!)}/>
        </IonToolbar>
    );
}

export default ToolbarSearch;