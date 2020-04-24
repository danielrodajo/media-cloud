import React, { Fragment, useState } from 'react';
import { useDispatch } from 'react-redux';
import SignUp from './SignUp/SignUp';
import SignIn from './SignIn/SignIn';
import Verify from './Verify/Verify';

const Authentication = () => {

    const dispatch = useDispatch();

    const [status, setStatus] = useState("signin");

    const AuthComponent = () => {
        switch (status) {
            case "signin": return <SignIn switchComponent={setStatus}/>;
            case "signup": return <SignUp switchComponent={setStatus}/>;
            case "verify": return <Verify switchComponent={setStatus}/>;
            default: return <SignIn switchComponent={setStatus}/>;
        }
    }

    return (
        <Fragment>{AuthComponent()}</Fragment>
    );
}
 
export default Authentication;