import { Auth } from "aws-amplify";
import * as types from './ActionTypes';

//Iniciar sesion
export const signIn = (username: string, password: string) => {
    return (dispatch: any) => {
        console.log(username, password)
        Auth.signIn({ username, password })
        .then(() => {
            Auth.currentAuthenticatedUser({
                bypassCache: false 
            })
            .then(data => dispatch({
                type: types.AUTH_SIGNIN,
                payload: data
            }))
        })         
        .catch(err => {
            console.log(err);
            dispatch({
                type: types.AUTH_SIGNIN_NOK,
                payload: err
            })
        });
    }
}


//Registrar usuario
export const signUp = (username: string, nickname: string, password: string) => {
    return (dispatch: any) => {
        Auth.signUp({
            username,
            password,
            attributes: { 
                name: nickname
              // agregar mas atributos personalizados
            },
            validationData: []
          })
            .then(()=> dispatch({
                type: types.AUTH_SIGNUP,
                payload: "verify"
            })) 
            .catch(err => {
                console.log(err);
                dispatch({
                    type: types.AUTH_SIGNUP_NOK,
                    payload: err
                })
              });
    }
}


//Verificar creacion de usuario
export const verify = (username: string, code: string) => {
    return (dispatch: any) => {
        Auth.confirmSignUp(username, code, {
            forceAliasCreation: true
          })
            .then(() => dispatch({
                type: types.AUTH_VERIFY,
                payload: "signin"
            }))
            .catch(err => {
                console.log(err);
                dispatch({
                    type: types.AUTH_VERIFY_NOK,
                    payload: err
                })
            });
    }
}

export const forgotPassword = (username: string) => {
    return (dispatch: any) => {
        Auth.forgotPassword(username)
        .then(() => dispatch({
            type: types.AUTH_FORGOT_PASSWORD,
            payload: "fpsubmit"
        }))
        .catch(err => {
            console.log(err);
            dispatch({
                type: types.AUTH_FORGOT_PASSWORD_NOK,
                payload: err
            })
        })
    }
}

export const forgotPasswordSubmit = (username: string, password: string, code: string) => {
    return (dispatch: any) => {
        Auth.forgotPasswordSubmit(username, code, password)
        .then(() => dispatch({
            type: types.AUTH_FORGOT_PASSWORD_SUBMIT,
            payload: "signin"
        }))
        .catch(err => {
            console.log(err);
            dispatch({
                type: types.AUTH_FORGOT_PASSWORD_SUBMIT_NOK,
                payload: err
            })
        })
    }
}

//Cerrar sesion
export const signOut = () => { 
    return (dispatch: any) => {
        Auth.signOut({ global: true })
            .then(() => dispatch({
                type: types.AUTH_SIGNOUT
            }))
            .catch(err => {
                console.log(err);
                dispatch({
                type: types.AUTH_SIGNOUT_NOK,
                payload: err
            })
        });
    }
}


//Cambia entre las diferentes pantallas del proceso de autenticacion
export const switchComponent = (component: string) => {
    return {
        type: types.AUTH_SWITCH_COMPONENT,
        payload: component
    }
}


//Revisa si te logeaste antes, para acceder directamente a la aplicacion
export const authCheckState = () => {
    return (dispatch: any) => {
        Auth.currentAuthenticatedUser({
            bypassCache: false 
        })
        .then(data => dispatch({
            type: types.AUTH_SIGNIN,
            payload: data
        }))
        .catch(err => console.log(err))
    }
}