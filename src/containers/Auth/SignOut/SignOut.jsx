import React from 'react';
import { Auth } from 'aws-amplify';
import * as actions from '../../../store/actions/index';
import { useDispatch } from 'react-redux';

const SignOut = () => {
    const dispatch = useDispatch();

    const handleSignOut = event => {
        event.preventDefault();
        Auth.signOut({ global: true })
        .then(() =>  dispatch(actions.signOut()))
        .catch(err => console.log(err));
    };

    return (
        <button onClick={handleSignOut}>Salir</button>
    );
}
 
export default SignOut;