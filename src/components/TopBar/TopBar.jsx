import React from 'react'
import './TopBar.css'
import { Authenticator } from 'aws-amplify-react';

const TopBar = props => {
    return (
        <div className="main_title">
            <h2>{props.title}</h2>
            <Authenticator usernameAttributes={props.usernameAttributes}/>   
        </div>
    );
}
 
export default TopBar;