import * as types from './ActionTypes';
import { API, graphqlOperation } from 'aws-amplify';
import * as Queries from '../../graphql/queries';

export const recoverNotifications = (idUser: String) => {
    return (dispatch: any) => {
        dispatch({
            type: types.RECOVER_NOTIFICATION
        });
        (API.graphql(graphqlOperation(Queries.listFriendRequests, {filter: {id: {beginsWith: idUser}}})) as Promise<any>)
        .then((result: any) => {
            dispatch({
                type: types.RECOVER_NOTIFICATION_OK,
                payload: result.data.listFriendRequests.items
            })
        })
        .catch((err: any) => dispatch({
            type: types.RECOVER_NOTIFICATION_NOK,
            payload: err
        }))
    }
}

export const saveNotification = (notification: Object) => {
    return (dispatch: any) => {
        dispatch({
            type: types.SAVE_NOTIFICATION_OK,
            payload: notification
        });
    }
}