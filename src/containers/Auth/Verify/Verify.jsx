import React from 'react';
import { useDispatch } from 'react-redux';
import * as actions from '../../../store/actions/index';

const Verify = props => {

    const dispatch = useDispatch();

    
    const handleVerification = event => {
        event.preventDefault();
        dispatch(actions.verify(props.userData.username, props.userData.code));
    };

    return (
        <form className="">
            <input
                type="text"
                name="code"
                value={props.code}
                placeholder="Código de verificación"
                onChange={props.handleFormInput}
                className=""
            />
            <input
                type="submit"
                value="Verificar"
                onClick={handleVerification}
                className=""
            />
            <button onClick={() => dispatch(actions.switchComponent("signup"))}>Volver</button>
        </form>
    );
}
 
export default Verify;