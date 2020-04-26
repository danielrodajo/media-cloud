import React, { Fragment, useState } from 'react';
import SignUp from './SignUp/SignUp';
import SignIn from './SignIn/SignIn';
import Verify from './Verify/Verify';
import { useSelector } from 'react-redux';

const Authentication = () => {

    const status = useSelector(state => state.AuthReducer.status);

    const [userData, setUserData] = useState({
        username: "",
        password: "",
        phone_number: "",
        code: "",
    });

    const handleFormInput = event => {
        setUserData({
            ...userData,
            [event.target.name] : event.target.value
        });
    }

    const AuthComponent = () => {
        switch (status) {
            case "signin": return (
                <SignIn 
                    handleFormInput={handleFormInput}
                    userData={userData}
                />
            );
            case "signup": return (
                <SignUp 
                    handleFormInput={handleFormInput}
                    userData={userData}
                />
            );
            case "verify": return (
                <Verify 
                    handleFormInput={handleFormInput}
                    userData={userData}
                />
            );
            default: return (
                <SignIn 
                    handleFormInput={handleFormInput}
                    userData={userData}
                />
            );
        }
    }

    return (
        <Fragment>{AuthComponent()}</Fragment>
    );
}
 
export default Authentication;