import * as types from '../actions/ActionTypes';
import { updateObject } from '../../shared/utility';
import { NotificationState } from '../types';

const initialState: NotificationState = {
    notifications: [],
    recoverNotificationError: null,
    saveNotificationError: null,
}

const recoverNotifications = (state: NotificationState) => {
    return updateObject( state, {
        recoverNotificationError: null
    });
}

const recoverNotificationsSuccess = (state: NotificationState, payload: any[]) => {
    return updateObject( state, {
        notifications: payload,
    });
}

const recoverNotificationsFail = (state: NotificationState, payload: Error) => {
    return updateObject( state, {
        recoverNotificationError: payload,
    })
}

const saveNotification = (state: NotificationState) => {
    return updateObject( state, {
        saveNotificationError: null
    });
}

const saveNotificationSuccess = (state: NotificationState, payload: any) => {
    return updateObject( state, {
        notifications: (state.notifications.filter((notification: any) => notification.id === payload.id).length === 0) 
        ? [payload].concat(state.notifications) : state.notifications
    });
}

const saveNotificationFail = (state: NotificationState, payload:Error) => {
    return updateObject( state, {
        saveNotificationFail: payload
    });
}

const deleteNotification = (state: NotificationState, payload:string) => {
    return updateObject( state, {
        notifications: state.notifications.filter((notification: any) => notification.id !== payload)
    });
}

const reducer = ( state = initialState, action: types.ActionTypes ) => {
    switch (action.type) {
        case types.RECOVER_NOTIFICATION: return recoverNotifications(state);
        case types.RECOVER_NOTIFICATION_OK: return recoverNotificationsSuccess(state, action.payload);
        case types.RECOVER_NOTIFICATION_NOK: return recoverNotificationsFail(state, action.payload);
        case types.SAVE_NOTIFICATION: return saveNotification(state);
        case types.SAVE_NOTIFICATION_OK: return saveNotificationSuccess(state, action.payload);
        case types.SAVE_NOTIFICATION_NOK: return saveNotificationFail(state, action.payload);
        case types.DELETE_NOTIFICATION_OK: return deleteNotification(state, action.payload);
        default: return state;
    }
}

export default reducer;
