import React, { useState } from 'react'
import { Redirect, Route } from 'react-router-dom';
import { IonRouterOutlet, IonTabs, IonTabBar, IonTabButton, IonLabel, IonIcon } from '@ionic/react';
import { homeOutline, searchOutline, addCircleOutline, peopleOutline, folderOutline, personOutline } from 'ionicons/icons';
import Home from '../../pages/home/Home';
import Add from '../../pages/add/Add';
import Profile from '../../pages/profile/Profile';
import Theme from '../../pages/profile/theme/Theme';
import AboutUs from '../../pages/profile/aboutus/AboutUs';

 
const BottomBar: React.FC = () => {

    //Indicador de si mostrar ventana de añadir o no
    const [ showModal, setShowModal ] = useState(false);

    //Indica que pagina es la activa
    const [activeTab, setActiveTab] = useState("Home");

    //Actualiza el indicador de pagina activa
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
            <Route path="/profile/theme" component={Theme}/>
            <Route path="/profile/aboutus" component={AboutUs}/>
            <Route exact path="/" render={() => <Redirect to="/home" />} />
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="Home" href="/home" layout={(activeTab === "Home") ? "icon-top" : "label-hide"}>
              <IonIcon icon={homeOutline}/> 
              <IonLabel>Inicio</IonLabel>
            </IonTabButton>
            <IonTabButton layout={(activeTab === "") ? "icon-top" : "label-hide"}>
              <IonIcon icon={searchOutline}/> 
              <IonLabel>Busqueda</IonLabel>
            </IonTabButton>
            <IonTabButton>
              <IonIcon icon={addCircleOutline} onClick={() => setShowModal(true)} /> 
            </IonTabButton>
            <IonTabButton layout={(activeTab === "") ? "icon-top" : "label-hide"}>
              <IonIcon icon={peopleOutline}/> 
              <IonLabel>Compartido</IonLabel>
            </IonTabButton>
            
            <IonTabButton tab="Profile" href="/profile" layout={(activeTab === "Profile") ? "icon-top" : "label-hide"}>
              <IonIcon icon={personOutline}/> 
              <IonLabel>Perfil</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </React.Fragment>
    );
}
 
export default BottomBar;