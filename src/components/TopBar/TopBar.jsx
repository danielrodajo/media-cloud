import React, { Fragment } from 'react'
import './TopBar.css'

const TopBar = props => {
    return (
        <div>
            <h2 className="h2 main_title">{props.title}</h2>
        </div>
    );
}
 
export default TopBar;