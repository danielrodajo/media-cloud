import React, { Fragment, Suspense } from 'react';
import './App.css';
import Amplify, { Storage } from 'aws-amplify';
import awsconfig from './aws-exports';
import '@aws-amplify/ui/dist/style.css';
import FileManager from './containers/FileManager';
import Authentication from './containers/Auth/Authentication';
import { Route, Redirect, Switch } from 'react-router-dom';

Amplify.configure(awsconfig);
Storage.configure({ level: 'protected' });

function App() {


  let routes = (
    <Switch>
      <Route path="/auth" component={Authentication} />
      <Route path="/" component={FileManager} />
    </Switch>
  );

  return (
    <Fragment>
      <Suspense fallback={<p>Loading...</p>}>{routes}</Suspense>
    </Fragment>
  );
}

export default App;
