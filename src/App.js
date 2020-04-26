import React, { Fragment, Suspense, useEffect } from 'react';
import './App.css';
import Amplify, { Storage} from 'aws-amplify';
import awsconfig from './aws-exports';
import '@aws-amplify/ui/dist/style.css';
import FileManager from './containers/FileManager';
import Authentication from './containers/Auth/Authentication';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './store/actions/index';

Amplify.configure(awsconfig);
Storage.configure({ level: 'protected' });


const App = props => { 

  const { onTryAutoSignup } = props;

  useEffect(() => {
    onTryAutoSignup();
  }, [onTryAutoSignup]);

  let routes = (
    <Switch>
      <Route path="/" component={Authentication} />
      <Redirect to="/" />
    </Switch>
  );

  if (props.isAuthenticated) {
    routes = (
      <Switch>
        <Route path="/" component={FileManager} />
        <Redirect to="/" />
      </Switch>
    )
  }

  return (
    <Fragment>
      <Suspense fallback={<p>Loading...</p>}>{routes}</Suspense>
    </Fragment>
  );
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.AuthReducer.user !== null
  };
};

const mapDispatchToProps = dispatch => {
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
