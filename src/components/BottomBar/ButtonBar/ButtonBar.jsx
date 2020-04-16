import React from 'react';
import './ButtonBar.css';

const ButtonBar = props => {
    return (
        <button className="ButtonBar" onClick={props.onClick}>
            <img src={props.img} alt={props.text}/>
        </button>
    );
}
 
export default ButtonBar;