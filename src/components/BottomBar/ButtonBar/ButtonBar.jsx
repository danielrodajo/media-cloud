import React from 'react';
import './ButtonBar.css';

const ButtonBar = props => {
    return (
        <button className="ButtonBar">
            <img src={props.img} alt={props.text}/>
        </button>
    );
}
 
export default ButtonBar;