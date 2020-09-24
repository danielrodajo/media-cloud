import * as types from '../actions/ActionTypes';
import { updateObject } from '../../shared/utility';
import { FolderState } from '../types';

const initialState: FolderState = {
    folder: [],
    createFolderError: null,
    creating: false,
    createSuccess: false,
}

const createFolder = (state: FolderState) => {
    return updateObject( state, {
        creating: true,
        createSuccess: false,
    });
}

const createFolderSuccess = (state: FolderState) => {
    return updateObject( state, {
        creating: false,
        createSuccess: true,
    });
}

const createFolderFail = (state: FolderState, payload: Error) => {
    return updateObject( state, {
        creating: false,
        createFolderError: payload
    })
}

const reducer = ( state = initialState, action: types.ActionTypes ) => {
    switch (action.type) {
        case types.CREATE_FOLDER: return createFolder(state);
        case types.CREATE_FOLDER_OK: return createFolderSuccess(state);
        case types.CREATE_FOLDER_NOK: return createFolderFail(state, action.payload);
        default: return state;
    }
}

export default reducer;
