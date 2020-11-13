import { Auth, API, graphqlOperation } from "aws-amplify";
import * as types from './ActionTypes';
import * as Mutations from '../../graphql/mutations';

export const editUsername = (userId: string, name: string) => {
    return (dispatch: any) => {
        dispatch({
            type: types.EDIT_USERNAME
        })     
        Auth.currentAuthenticatedUser({
            bypassCache: false 
        })
        .then(async (data) => {
            Auth.updateUserAttributes(data, {
            "name": name
            });
            await API.graphql(graphqlOperation(Mutations.updateUser, {input: {id: userId, name: name}}));
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