import { Auth } from "aws-amplify";
import * as types from './ActionTypes';

export const signIn = (username, password) => {
    return (dispatch) => {
        Auth.signIn({ username, password })
        .then(() => {
            Auth.currentAuthenticatedUser({
                bypassCache: false 
            })
            .then(data => dispatch({
                type: types.AUTH_SIGNIN,
                user: data
            }))
        })         
        .catch(err => {
            console.log(err);
            dispatch({
                type: types.AUTH_SIGNIN_NOK,
                error: err
            })
        });
    }
}


export const signUp = (username, password, phone_number) => {
    return (dispatch) => {
        Auth.signUp({
            username,
            password,
            attributes: {
                phone_number 
              // agregar mas atributos personalizados
            },
            validationData: []
          })
            .then(()=> dispatch({
                type: types.AUTH_SIGNUP,
            })) 
            .catch(err => {
                console.log(err);
                dispatch({
                    type: types.AUTH_SIGNUP_NOK,
                    error: err
                })
              });
    }
}


export const verify = (username, code) => {
    return (dispatch) => {
        Auth.confirmSignUp(username, code, {
            forceAliasCreation: true
          })
            .then(() => dispatch({
                type: types.AUTH_VERIFY
            }))
            .catch(err => {
                console.log(err);
                dispatch({
                    type: types.AUTH_VERIFY_NOK,
                    error: err
                })
            });
    }
}

export const signOut = () => {
    return {
        type: types.AUTH_SIGNOUT
    }
}

export const authCheckState = () => {
    return (dispatch) => {
        Auth.currentAuthenticatedUser({
            bypassCache: false 
        })
        .then(data => dispatch({
            type: types.AUTH_SIGNIN,
            user: data
        }))
        .catch(err => console.log(err))
    }
}