import React from 'react'
import './TopBar.css'
import { Authenticator } from 'aws-amplify-react';
import logo from "../../assets/images/logomediacloudblanco.png"

const TopBar = props => {
    return (
        <div className="main_title">
            <img src={logo} alt="mediacloud" className="imglogo"/>            
        </div>
    );
}
 
export default TopBar;