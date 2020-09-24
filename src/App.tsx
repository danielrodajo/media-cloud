import React, { useEffect } from 'react';
import { IonApp } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

import BottomBar from './components/BottomBar/BottomBar';
import Amplify, {Storage} from 'aws-amplify';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import awsconfig from './aws-exports';
import { RootState } from './store/store';
import * as actions from './store/actions/index';
import Authentication from './pages/authentication/Authentication';


Amplify.configure(awsconfig);
Storage.configure({ level: 'protected' });

const App: React.FC<{
  onTryAutoSignup: any
  isAuthenticated: boolean
}> = props => {

  const { onTryAutoSignup } = props;
  
  useEffect(() => {
    onTryAutoSignup();
  }, [onTryAutoSignup]);

  let routes = (
    <Authentication />
  );
  

  if (props.isAuthenticated) {
    routes = (
      <BottomBar />
    )
  }

  return (
  <IonApp>
    <IonReactRouter>
      {routes}
    </IonReactRouter>
  </IonApp>
  )
};

const mapStateToProps = (state: RootState) => {
  return {
    isAuthenticated: state.AuthReducer.user !== null
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  };
};


export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
