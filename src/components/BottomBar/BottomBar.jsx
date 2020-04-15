import React from 'react';
import ButtonBar from './ButtonBar/ButtonBar';
import './BottomBar.css';

const BottomBar = props => {
    return (
        <div className="BottomBar">
            {
                props.buttons.map(button => <ButtonBar key={button} text={button}/>)
            }
        </div>
    );
}
 
export default BottomBar;