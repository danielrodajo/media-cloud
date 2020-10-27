import { Auth } from "aws-amplify";
import * as types from './ActionTypes';
import * as Mutations from '../../graphql/mutations';
import * as Queries from '../../graphql/queries';
import {API, graphqlOperation} from 'aws-amplify';

async function addIfNewUser(userData: any) {
    try {
        const user:any = await API.graphql(graphqlOperation(Queries.getUser, {id: userData.identityId}));
        if (user.data.getUser === null) {
            API.graphql(graphqlOperation(Mutations.createUser, {input: {
                id: userData.identityId,
                name: userData.attributes.name
            }}));
        }
      }catch (error) {
        console.log(error);
      }
}

//Iniciar sesion
export const signIn = (username: string, password: string) => {
    return (dispatch: any) => {
        dispatch({
            type: types.AUTH_SIGNIN
        });
        Auth.signIn({ username, password })
        .then(() => {
            Auth.currentAuthenticatedUser({
                bypassCache: false 
            })
            .then(data => {
                Auth.currentUserCredentials()
                .then(e => {
                    data = {...data, identityId: e.identityId}
                    addIfNewUser(data);
                    dispatch({
                        type: types.AUTH_SIGNIN_OK,
                        payload: data
                    })
                })
                .catch(err => {
                    console.log(err);
                    dispatch({
                        type: types.AUTH_SIGNIN_NOK,
                        payload: err
                    })
                });
            })
        })         
        .catch(err => {
            if (err.code === "UserNotConfirmedException") {
                dispatch({
                    type: types.AUTH_SWITCH_COMPONENT,
                    payload: "verify"
                });
            } else {
                console.log(err);
                dispatch({
                    type: types.AUTH_SIGNIN_NOK,
                    payload: err
                })
            }
        });
    }
}


//Registrar usuario
export const signUp = (username: string, nickname: string, password: string) => {
    return (dispatch: any) => {
        dispatch({
            type: types.AUTH_SIGNUP
        });
        Auth.signUp({
            username,
            password,
            attributes: { 
                name: nickname,
                "custom:darkMode": "0"
              // agregar mas atributos personalizados
            },
            validationData: []
          })
            .then(()=> dispatch({
                type: types.AUTH_SIGNUP_OK,
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
        dispatch({
            type: types.AUTH_VERIFY
        });
        Auth.confirmSignUp(username, code, {
            forceAliasCreation: true
          })
            .then(() => dispatch({
                type: types.AUTH_VERIFY_OK,
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
        dispatch({
            type: types.AUTH_FORGOT_PASSWORD
        })
        Auth.forgotPassword(username)
        .then(() => dispatch({
            type: types.AUTH_FORGOT_PASSWORD_OK,
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
        dispatch({
            type: types.AUTH_FORGOT_PASSWORD_SUBMIT
        })
        Auth.forgotPasswordSubmit(username, code, password)
        .then(() => dispatch({
            type: types.AUTH_FORGOT_PASSWORD_SUBMIT_OK,
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
        dispatch({
            type: types.AUTH_SIGNOUT
        })
        Auth.signOut({ global: true })
            .then(() => dispatch({
                type: types.AUTH_SIGNOUT_OK
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

export const switchDarkMode = (darkmode: any) => {
    return {
        type: types.SWITCH_DARKMODE,
        payload: darkmode
    }
}


//Revisa si te logeaste antes, para acceder directamente a la aplicacion
export const authCheckState = () => {
    return (dispatch: any) => {
        Auth.currentAuthenticatedUser({
            bypassCache: false 
        })
        .then(data => {
            Auth.currentUserCredentials()
            .then(e => {
                data = {...data, identityId: e.identityId}
                dispatch({
                    type: types.AUTH_SIGNIN_OK,
                    payload: data
                })
            })           
        })
        .catch(err => {
            if (err !== 'not authenticated') {
                console.log(err);
                dispatch({
                    type: types.AUTH_SIGNIN_NOK,
                    payload: err
                })
            }

        });
    }
}