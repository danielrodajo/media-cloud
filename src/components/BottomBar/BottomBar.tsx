import React, { useState, useEffect, useRef } from 'react'
import { Link, Redirect, Route } from 'react-router-dom';
import { IonRouterOutlet, IonTabs, IonTabBar, IonTabButton, IonLabel, IonIcon, IonItem, IonRedirect } from '@ionic/react';
import { homeOutline, searchOutline, addCircleOutline, peopleOutline, personOutline } from 'ionicons/icons';
import Home from '../../containers/home/Home';
import Add from '../../containers/add/Add';
import Profile from '../../containers/profile/Profile';
import Search from '../../containers/search/Search';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { Auth, API, graphqlOperation } from 'aws-amplify';
import * as actions from "../../store/actions/index";
import * as Subscriptions from '../../graphql/subscriptions';
import { Observable } from 'redux';
import Friends from '../../containers/friends/Friends';

interface props {
  default: string;
}
 
const BottomBar: React.FC<props> = props => {

    const dispatch = useDispatch();

    const user = useSelector((state: RootState) => state.AuthReducer.user);

    //Indicador de si mostrar ventana de añadir o no
    const [ showModal, setShowModal ] = useState(false);

    //Indica que pagina es la activa
    const [activeTab, setActiveTab] = useState(props.default);

    //Actualiza el indicador de pagina activa
    const handleActiveButton = (event: CustomEvent) => {
      setActiveTab(event.detail.tab);
    }

    const getFriends = (userId: string) => dispatch(actions.getFriends(userId));

    const deleteFriend = (friendId: string) => dispatch(actions.deleteFriend(friendId));
    
    //Subscripcion que está a la escucha de nuevas notificaciones y, en caso de ser suyas, las agrega
    const subscriptionCreateFR = (API.graphql(
      graphqlOperation(Subscriptions.onCreateFriendRequest)
    ) as unknown as Observable<any>).subscribe({
        next: (data) => {
          const toUserId = data.value.data.onCreateFriendRequest.to.id;
          if (toUserId === user.identityId) {
            saveNotification(data.value.data.onCreateFriendRequest);
          }
        }
    });

    const subscriptionCreateFriend = (API.graphql(graphqlOperation(Subscriptions.onCreateFriend)
    ) as unknown as Observable<any>).subscribe({
      next: (data) => {
        const userId = data.value.data.onCreateFriend.user.id;
        if (userId === user.identityId) {
          getFriends(userId);
        }
      }
    });

    const subscriptionDeleteFriend = (API.graphql(graphqlOperation(Subscriptions.onDeleteFriend)
    ) as unknown as Observable<any>).subscribe({
      next: (data) => {
        const friendId = data.value.data.onDeleteFriend.user.id;
        const userId = data.value.data.onDeleteFriend.id.split(friendId)[0];
        if (userId === user.identityId) {
          deleteFriend(friendId+userId);
        }
      }
    });

    const handleSignOut = () => {
      subscriptionCreateFR.unsubscribe();
      subscriptionCreateFriend.unsubscribe();
      subscriptionDeleteFriend.unsubscribe();
      dispatch(actions.signOut());
    }

    const switchDarkMode = (value: string) => dispatch(actions.switchDarkMode(value));
    const getNotifications = (id: string) => dispatch(actions.recoverNotifications(id));
    const saveNotification = (notification: object) => dispatch(actions.saveNotification(notification))

    const darkMode = useSelector((state: RootState) => state.AuthReducer.user.attributes['custom:darkMode']);
    
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

    //Descargamos notificaciones iniciales
    getNotifications(user.identityId);

    //Descargamos amigos iniciales
    getFriends(user.identityId);

    //Poner/Quitar modo oscuro
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
            <Route path="/friends" component={Friends} exact />
            <Route path="/profile" render={() => <Profile handleSignOut={handleSignOut} darkMode={darkMode === "1"} setDarkMode={setDarkMode}/>} exact />
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
              <IonItem lines="none" button onClick={() => setShowModal(true)} >
                  <IonIcon icon={addCircleOutline}/> 
              </IonItem>
            </IonTabButton>
            <IonTabButton tab="Friends" href="/friends" layout={(activeTab === "Friends") ? "icon-top" : "label-hide"}>
              <IonIcon icon={peopleOutline}/> 
              <IonLabel>Mis Amigos</IonLabel>
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