import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as actions from '../../../store/actions/index';

const SignUp = props => {

    const dispatch = useDispatch();

    const [userData, setUserData] = useState({
        username: "",
        password: "",
        phone_number: "",
    });

    const handleFormInput = event => {
        setUserData({
            ...userData,
            [event.target.name] : event.target.value
        });
    }

    const handleSignUp = event => {
        event.preventDefault();
        dispatch(actions.signUp(userData.username, userData.password, userData.phone_number));
        props.switchComponent("verify");
      };

    return (
        <form className="">
            <input
                type="email"
                name="username"
                value={userData.username}
                placeholder="Correo electrónico"
                onChange={handleFormInput}
                className=""
            />
            <input
                type="password"
                name="password"
                value={userData.password}
                placeholder="Contraseña"
                onChange={handleFormInput}
                className="authentication__input"
            />
            <input
                type="text"
                name="phone_number"
                value={userData.phone_number}
                placeholder="Número de teléfono"
                onChange={handleFormInput}
                className=""
            />
            <input
                type="submit"
                value="Registrarse"
                onClick={handleSignUp}
                className=""
            />
            <span>¿Ya tienes cuenta? <button onClick={() => {props.switchComponent("signin")}}>Inicia sesión</button></span>
        </form>
    );
}
 
export default SignUp;