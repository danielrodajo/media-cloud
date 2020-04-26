import React, { Fragment } from 'react';
import * as actions from '../../../store/actions/index';
import { useDispatch, useSelector } from 'react-redux';

const SignOut = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.AuthReducer.user);

    const handleSignOut = event => {
        event.preventDefault();
        dispatch(actions.signOut());    
    };

    return (
        <Fragment>
            <button onClick={handleSignOut}>Salir</button>
            <h5>{user.attributes.email}</h5>
        </Fragment>  
    );
}
 
export default SignOut;