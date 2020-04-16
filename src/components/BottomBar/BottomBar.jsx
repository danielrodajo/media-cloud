import React from 'react';
import ButtonBar from './ButtonBar/ButtonBar';
import './BottomBar.css';

const BottomBar = props => {
    console.log(props.buttons)
    return (
        <div className="BottomBar">
            {
                props.buttons.map(button => <ButtonBar key={button.text} text={button.text} img={button.img}/>)
            }
        </div>
    );
}
 
export default BottomBar;