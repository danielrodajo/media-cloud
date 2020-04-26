import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../../store/actions/index';

const SignUp = props => {

    const dispatch = useDispatch();
    const messageError = useSelector(state => state.AuthReducer.signUpError);

    const handleSignUp = event => {
        event.preventDefault();
        dispatch(actions.signUp(props.userData.username, props.userData.password, props.userData.phone_number));
      };

    return (
        <form className="">
            {(messageError) ? <span>{messageError.message}</span> : null}
            <input
                type="email"
                name="username"
                value={props.userData.username}
                placeholder="Correo electrónico"
                onChange={props.handleFormInput}
                className=""
            />
            <input
                type="password"
                name="password"
                value={props.userData.password}
                placeholder="Contraseña"
                onChange={props.handleFormInput}
                className="authentication__input"
            />
            <input
                type="text"
                name="phone_number"
                value={props.userData.phone_number}
                placeholder="Número de teléfono"
                onChange={props.handleFormInput}
                className=""
            />
            <input
                type="submit"
                value="Registrarse"
                onClick={handleSignUp}
                className=""
            />
            <span>¿Ya tienes cuenta? <button onClick={() => {dispatch(actions.switchComponent("signin"))}}>Inicia sesión</button></span>
        </form>
    );
}
 
export default SignUp;