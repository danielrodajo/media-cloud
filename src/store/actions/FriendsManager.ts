import * as types from './ActionTypes';
import { API, graphqlOperation } from 'aws-amplify';
import * as Queries from '../../graphql/queries';

export const getFriends = (userId: string) => {
    return (dispatch: any) => {
        dispatch({
            type: types.RECOVER_FRIENDS
        });
        (API.graphql(graphqlOperation(Queries.getUser, {id: userId})) as Promise<any>)
        .then((result: any) => {
            dispatch({
                type: types.RECOVER_FRIENDS_OK,
                payload: result.data.getUser.friends.items
            });
        }).catch((err: any) => dispatch({
            type: types.RECOVER_FRIENDS_NOK,
            payload: err
        }))
    }
}

export const deleteFriend = (friendId: string) => {
    return (dispatch: any) => {
        dispatch({
            type: types.DELETE_FRIEND_OK,
            payload: friendId
        });  
    }
}

export const addFriend = (friend: any) => {
    return (dispatch: any) => {
        dispatch({
            type: types.ADD_FRIEND_OK,
            payload: friend
        });
    }
}