import * as types from '../actions/ActionTypes';
import { updateObject } from '../../shared/utility';
import { ShareFileState } from '../types';

const initialState: ShareFileState = {
    files: [],
    recoverError: null,
    downloading: false,
    sharingToUserOperation: false,
    sharingToUserError: null,
    stopSharingToUserError: null,
}

const recoverShareFiles = (state: ShareFileState) => {
    return updateObject( state, {
        recoverError: null,
        downloading: true
    })
}

const recoverShareFilesSuccess = (state: ShareFileState, payload: any) => {
    return updateObject( state, {
        files: payload,
        downloading: false
    })
}

const recoverShareFilesFail = (state: ShareFileState, payload: any) => {
    return updateObject( state, {
        recoverError: payload,
        downloading: false
    })
}

const shareFileToUser = (state: ShareFileState) => {
    return updateObject( state, {
        sharingToUserError: null,
        sharingToUserOperation: true
    })
}
const shareFileToUserSuccess = (state: ShareFileState) => {
    return updateObject( state, {
        sharingToUserOperation: false
    })
}
const shareFileToUserFail = (state: ShareFileState, payload: any) => {
    return updateObject( state, {
        sharingToUserError: payload,
        sharingToUserOperation: false
    })
}

const stopSharingFileToUser = (state: ShareFileState) => {
    return updateObject( state, {
        sharingToUserOperation: true
    })
}
const stopSharingFileToUserSuccess = (state: ShareFileState) => {
    return updateObject( state, {
        sharingToUserOperation: false
    })
}
const stopSharingFileToUserFail = (state: ShareFileState, payload: any) => {
    return updateObject( state, {
        sharingToUserOperation: false,
        stopSharingToUserError: payload
    })
}

const reducer = ( state = initialState, action: types.ActionTypes ) => {
    switch (action.type) {
        case types.RECOVER_SHARE_FILES: return recoverShareFiles(state);
        case types.RECOVER_SHARE_FILES_OK: return recoverShareFilesSuccess(state, action.payload);
        case types.RECOVER_SHARE_FILES_NOK: return recoverShareFilesFail(state, action.payload);
        case types.SHARE_FILE_WITH_FRIEND: return shareFileToUser(state);
        case types.SHARE_FILE_WITH_FRIEND_OK: return shareFileToUserSuccess(state);
        case types.SHARE_FILE_WITH_FRIEND_NOK: return shareFileToUserFail(state, action.payload);
        case types.STOP_SHARE_FILE_WITH_FRIEND: return stopSharingFileToUser(state);
        case types.STOP_SHARE_FILE_WITH_FRIEND_OK: return stopSharingFileToUserSuccess(state);
        case types.STOP_SHARE_FILE_WITH_FRIEND_NOK: return stopSharingFileToUserFail(state, action.payload);
        default: return state;
    }
}

export default reducer;
