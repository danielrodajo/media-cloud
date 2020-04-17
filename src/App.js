import React, { Fragment, Suspense } from 'react';
import './App.css';
import TopBar from './components/TopBar/TopBar';
import BottomBar from './components/BottomBar/BottomBar';
import ListButtons from './containers/ListButtons';
import { Switch, Route } from 'react-router-dom';
import FileRetriever from './containers/FileRetriever/FileRetriever';
import Amplify, { Storage } from 'aws-amplify';
import awsconfig from './aws-exports';
import { withAuthenticator } from 'aws-amplify-react';
import '@aws-amplify/ui/dist/style.css';

Amplify.configure(awsconfig);
Storage.configure({ level: 'protected' });

function App() {

  let routes = (
    <Switch>
      <Route path="/" exact>
        <FileRetriever />
      </Route>
    </Switch>
  )

  return (
    <Fragment>
      <TopBar title="Inicio" usernameAttributes="email"/>
      <Suspense fallback={<p>Loading...</p>}>{routes}</Suspense>
      <BottomBar buttons = {ListButtons()}/>
    </Fragment>  
  );
}

export default withAuthenticator(App, { usernameAttributes: 'email' });
