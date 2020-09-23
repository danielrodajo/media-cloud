import React, { useState } from 'react'
import { Redirect, Route } from 'react-router-dom';
import { IonRouterOutlet, IonTabs, IonTabBar, IonTabButton, IonLabel, IonIcon } from '@ionic/react';
import { homeOutline, searchOutline, addCircleOutline, peopleOutline, folderOutline } from 'ionicons/icons';
import Home from '../../pages/home/Home';
import Add from '../../pages/add/Add';
import Profile from '../../pages/profile/Profile';

 
const BottomBar: React.FC = () => {

    const [ showModal, setShowModal ] = useState(false);

    const [activeTab, setActiveTab] = useState("Home");
    const handleActiveButton = (event: CustomEvent) => {
      setActiveTab(event.detail.tab);
    }

    return ( 
      <React.Fragment>
        <Add showModal={showModal} setShowModal={setShowModal} />
        <IonTabs onIonTabsDidChange={handleActiveButton}>
          <IonRouterOutlet>
            <Route path="/home" component={Home} exact />
            <Route path="/search" exact />
            <Route path="/shared" exact />
            <Route path="/profile" component={Profile} exact />
            <Route exact path="/" render={() => <Redirect to="/home" />} />
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="Home" href="/home" layout={(activeTab === "Home")? "icon-top" : "label-hide"}>
              <IonIcon icon={homeOutline}/> 
              <IonLabel>Home</IonLabel>
            </IonTabButton>
            <IonTabButton >
              <IonIcon icon={searchOutline}/> 
              <IonLabel>Search</IonLabel>
            </IonTabButton>
            <IonTabButton>
              <IonIcon icon={addCircleOutline} onClick={() => setShowModal(true)}/> 
            </IonTabButton>
            <IonTabButton>
              <IonIcon icon={peopleOutline}/> 
              <IonLabel>Shared</IonLabel>
            </IonTabButton>
            <IonTabButton tab="Profile" href="/profile" layout={(activeTab === "Profile")? "icon-top" : "label-hide"}>
              <IonIcon icon={folderOutline}/> 
              <IonLabel>Documents</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </React.Fragment>
    );
}
 
export default BottomBar;