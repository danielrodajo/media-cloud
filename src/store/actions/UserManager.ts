import { Auth } from "aws-amplify";
import * as types from './ActionTypes';

export const editUsername = (name: string) => {
    return (dispatch: any) => {
        dispatch({
            type: types.EDIT_USERNAME
        })
        Auth.currentAuthenticatedUser({
            bypassCache: false 
          })
        .then(data => {
            Auth.updateUserAttributes(data, {
            "name": name
            });
            dispatch({
                type: types.EDIT_USERNAME_OK,
                payload: name
            })   
        })
        .catch(err => dispatch({
            type: types.EDIT_USERNAME_NOK,
            payload: err
        }))
    }
}