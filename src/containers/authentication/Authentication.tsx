import React, { useState, useEffect } from 'react';
import Verify from './verify/Verify';
import { IonPage, IonContent } from '@ionic/react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import SignIn from './signin/SignIn';
import SignUp from './signup/SignUp';
import ForgotPassword from './forgotpassword/ForgotPassword';
import ForgotPasswordSubmit from './forgotpasswordsubmit/ForgotPasswordSubmit';

const Authentication: React.FC = () => {

    useEffect(() => {
        document.body.classList.toggle("dark", false);
    }, []);

    const status = useSelector((state: RootState) => state.AuthReducer.status);

    const [userData, setUserData] = useState({
        email: "",
        username: "",
        password: "",
        code: "",
    });

    const handleFormInput = (event: any) => {
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
            case "forgotpass": return (
                <ForgotPassword
                    handleFormInput={handleFormInput}
                    userData={userData}
                />
            );
            case "fpsubmit": return (
                <ForgotPasswordSubmit
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
        <IonPage>
            <IonContent>
                {AuthComponent()}
            </IonContent>
        </IonPage>
    );
}

export default Authentication;