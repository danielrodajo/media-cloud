import React, { Fragment, useState } from 'react';
import SignUp from './SignUp/SignUp';
import SignIn from './SignIn/SignIn';
import Verify from './Verify/Verify';

const Authentication = () => {

    const [status, setStatus] = useState("signin");

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
                    switchComponent={setStatus} 
                    handleFormInput={handleFormInput}
                    userData={userData}
                />
            );
            case "signup": return (
                <SignUp 
                    switchComponent={setStatus}
                    handleFormInput={handleFormInput}
                    userData={userData}
                />
            );
            case "verify": return (
                <Verify 
                    switchComponent={setStatus}
                    handleFormInput={handleFormInput}
                    userData={userData}
                />
            );
            default: return (
                <SignIn 
                    switchComponent={setStatus}
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