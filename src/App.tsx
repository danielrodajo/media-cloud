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

import Amplify, {Storage} from 'aws-amplify';
import { withRouter } from 'react-router';
import { connect, useSelector } from 'react-redux';
import awsconfig from './aws-exports';
import { RootState } from './store/store';
import * as actions from './store/actions/index';
import Authentication from './containers/authentication/Authentication';
import CustomLoading from './components/CustomLoading/CustomLoading';
import Root from './containers/root/Root';


Amplify.configure(awsconfig);
Storage.configure({ level: 'protected' });

const App: React.FC<{
  onTryAutoSignup: any
  isAuthenticated: boolean
}> = props => {

  const { onTryAutoSignup } = props;
  
  useEffect(() => {
    let isMounted = true;
    if (isMounted)
      onTryAutoSignup();
    return () => {isMounted = false}
  }, [onTryAutoSignup]);

  const loadingAuth = useSelector((state: RootState) => state.AuthReducer.loading);

  return (
  <IonApp>
    <IonReactRouter>
      {loadingAuth ? <CustomLoading showLoading={loadingAuth}/> : null}
      {
        props.isAuthenticated ?
        <Root default="Home"/>
        : <Authentication />
      }
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
