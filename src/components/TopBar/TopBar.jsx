import React from 'react'
import './TopBar.css'

const TopBar = props => {
    return (
        <div className="main_title">
            <h2>{props.title}</h2>
        </div>
    );
}
 
export default TopBar;