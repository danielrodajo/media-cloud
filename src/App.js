import React, { Fragment } from 'react';
import './App.css';
import Amplify, { Storage } from 'aws-amplify';
import awsconfig from './aws-exports';
import { withAuthenticator } from 'aws-amplify-react';
import '@aws-amplify/ui/dist/style.css';

Amplify.configure(awsconfig);
Storage.configure({ level: 'protected' });

function App() {

  

  return (
    <Fragment>
    </Fragment>  
  );
}

export default withAuthenticator(App, { usernameAttributes: 'email' });
