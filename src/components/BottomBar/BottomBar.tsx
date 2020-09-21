import React, { useState } from 'react'
import { Redirect, Route } from 'react-router-dom';
import { IonRouterOutlet, IonTabs, IonTabBar, IonTabButton, IonLabel, IonIcon } from '@ionic/react';
import { homeOutline, searchOutline, addOutline, peopleOutline, folderOutline } from 'ionicons/icons';
import Home from '../../pages/home/Home';
import Add from '../../pages/add/Add';

 
const BottomBar: React.FC = () => {

    const [ showModal, setShowModal ] = useState(false);

    return ( 
      <React.Fragment>
        <IonTabs>
          <IonRouterOutlet>
            <Route path="/home" component={Home} exact />
            <Route path="/search" exact />
            <Route path="/add" component={Add} exact />
            <Route path="/shared" exact />
            <Route path="/docs" exact />
            <Route exact path="/" render={() => <Redirect to="/home" />} />
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="Home" href="/home">
              <IonIcon icon={homeOutline}/> 
              <IonLabel>Home</IonLabel>
            </IonTabButton>
            <IonTabButton>
              <IonIcon icon={searchOutline}/> 
              <IonLabel>Search</IonLabel>
            </IonTabButton>
            <IonTabButton tab="Add" href="/add" onClick={() => console.log("ADD")}>
              <IonIcon icon={addOutline}/> 
              <IonLabel>Add</IonLabel>
            </IonTabButton>
            <IonTabButton>
              <IonIcon icon={peopleOutline}/> 
              <IonLabel>Shared</IonLabel>
            </IonTabButton>
            <IonTabButton>
              <IonIcon icon={folderOutline}/> 
              <IonLabel>Documents</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </React.Fragment>
    );
}
 
export default BottomBar;