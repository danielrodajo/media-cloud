import React from 'react';
import { useDispatch } from 'react-redux';
import * as actions from '../../../store/actions/index';

const SignIn = props => {

    const dispatch = useDispatch();


    const handleSignIn = event => {
        event.preventDefault();
       
        dispatch(actions.signIn(props.userData.username, props.userData.password));
      };

    return (
        <form className="">
            <input
                type="text"
                name="username"
                value={props.userData.username}
                placeholder="example@mediacloud.es"
                onChange={props.handleFormInput}
                className=""
            />
            <input
                type="password"
                name="password"
                value={props.userData.password}
                placeholder="Contraseña"
                onChange={props.handleFormInput}
                className=""
            />
            <input
                type="submit"
                value="Iniciar Sesión"
                onClick={handleSignIn}
                className=""
            />
            <button onClick={() => {props.switchComponent("signup")}}>Registrarse</button>
        </form>
    );
}
 
export default SignIn;