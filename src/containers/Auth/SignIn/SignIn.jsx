import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as actions from '../../../store/actions/index';

const SignIn = props => {

    const dispatch = useDispatch();

    const [userData, setUserData] = useState({
        username: "",
        password: "",
    });

    const handleFormInput = event => {
        setUserData({
            ...userData,
            [event.target.name] : event.target.value
        });
    }

    const handleSignIn = event => {
        event.preventDefault();
       
        dispatch(actions.signIn(userData.username, userData.password));
      };

    return (
        <form className="">
            <input
                type="text"
                name="username"
                value={userData.username}
                placeholder="example@mediacloud.es"
                onChange={handleFormInput}
                className=""
            />
            <input
                type="password"
                name="password"
                value={userData.password}
                placeholder="Contraseña"
                onChange={handleFormInput}
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