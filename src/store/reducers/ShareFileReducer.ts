import * as types from '../actions/ActionTypes';
import { updateObject } from '../../shared/utility';
import { ShareFileState } from '../types';

const initialState: ShareFileState = {
    files: null,
    recoverError: null,
    downloading: false,
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

const reducer = ( state = initialState, action: types.ActionTypes ) => {
    switch (action.type) {
        case types.RECOVER_SHARE_FILES: return recoverShareFiles(state);
        case types.RECOVER_SHARE_FILES_OK: return recoverShareFilesSuccess(state, action.payload);
        case types.RECOVER_SHARE_FILES_NOK: return recoverShareFilesFail(state, action.payload);
        default: return state;
    }
}

export default reducer;
