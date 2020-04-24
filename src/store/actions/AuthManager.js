import { Auth } from "aws-amplify";
import * as types from './ActionTypes';

export const signIn = (username, password) => {
    return (dispatch) => {
        Auth.signIn({ username, password })
          .then(() => dispatch({
              type: types.AUTH_SIGNIN,
              username: username
          }))
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
            })) // switches Sign Up to Verification
            .catch(err => {
                console.log(err);
                dispatch({
                    type: types.AUTH_SIGNUP_NOK,
                    error: err
                })
              });
    }
}