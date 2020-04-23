import React, { Fragment } from 'react';
import './App.css';
import Amplify, { Storage } from 'aws-amplify';
import awsconfig from './aws-exports';
import { withAuthenticator, Authenticator } from 'aws-amplify-react';
import '@aws-amplify/ui/dist/style.css';
import FileManager from './containers/FileManager';

Amplify.configure(awsconfig);
Storage.configure({ level: 'protected' });

function App() {

  

  return (
    <Fragment>
      <Authenticator usernameAttributes="email"/>
      <FileManager />
    </Fragment>  
  );
}

export default withAuthenticator(App, { usernameAttributes: 'email' });
