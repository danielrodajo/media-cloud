import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../../store/actions/index';

const Verify = props => {

    const dispatch = useDispatch();
    const messageError = useSelector(state => state.AuthReducer.verifyError);
    
    const handleVerification = event => {
        event.preventDefault();
        dispatch(actions.verify(props.userData.username, props.userData.code));
    };

    return (
        <form className="">
            {(messageError) ? <span>{messageError.message}</span> : null}
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