import React, { useState, useEffect } from 'react'
import { Redirect, Route } from 'react-router-dom';
import { IonRouterOutlet, IonTabs, IonTabBar, IonTabButton, IonLabel, IonIcon } from '@ionic/react';
import { homeOutline, searchOutline, addCircleOutline, peopleOutline, personOutline } from 'ionicons/icons';
import Home from '../../pages/home/Home';
import Add from '../../pages/add/Add';
import Profile from '../../pages/profile/Profile';
import Search from '../../pages/search/Search';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { Auth } from 'aws-amplify';
import * as actions from "../../store/actions/index";

interface props {
  default: string;
}
 
const BottomBar: React.FC<props> = props => {

  const dispatch = useDispatch();

    //Indicador de si mostrar ventana de añadir o no
    const [ showModal, setShowModal ] = useState(false);

    //Indica que pagina es la activa
    const [activeTab, setActiveTab] = useState(props.default);

    //Actualiza el indicador de pagina activa
    const handleActiveButton = (event: CustomEvent) => {
      setActiveTab(event.detail.tab);
    }

    const switchDarkMode = (value: string) => dispatch(actions.switchDarkMode(value));

    const darkMode = useSelector((state: RootState) => state.AuthReducer.user.attributes['custom:darkMode']);
    const user = useSelector((state: RootState) => state.AuthReducer.user);
    
    const setDarkMode = (darkMode: boolean) => {
      //Actualizamos en AWS Cognito
      Auth.currentAuthenticatedUser({
        bypassCache: false 
      })
      .then(data => {
          Auth.updateUserAttributes(data, {
            "custom:darkMode": (darkMode ? "1" : "0")
          });
      })

     
      //Actualizamos en Redux Local
      switchDarkMode((darkMode ? "1" : "0"));
    }

    useEffect(() => {
      document.body.classList.toggle("dark", darkMode === "1");
    }, [darkMode]);


    return ( 
      <React.Fragment>
        <Add showModal={showModal} setShowModal={setShowModal} />
        <IonTabs onIonTabsDidChange={handleActiveButton}>
          <IonRouterOutlet>
            <Route path="/home" component={Home} exact />
            <Route path="/search" component={Search} exact />
            <Route path="/shared" exact />
            <Route path="/profile" render={() => <Profile darkMode={darkMode === "1"} setDarkMode={setDarkMode}/>} exact />
            <Route exact path="/" render={() => <Redirect to="/home" />} />
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="Home" href="/home" layout={(activeTab === "Home") ? "icon-top" : "label-hide"}>
              <IonIcon icon={homeOutline}/> 
              <IonLabel>Inicio</IonLabel>
            </IonTabButton>
            <IonTabButton tab="Search" href="/search" layout={(activeTab === "Search") ? "icon-top" : "label-hide"}>
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