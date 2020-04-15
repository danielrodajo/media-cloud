import React from 'react';
import './ButtonBar.css';

const ButtonBar = props => {
    return (
        <button className="ButtonBar">
            {props.text}
        </button>
    );
}
 
export default ButtonBar;