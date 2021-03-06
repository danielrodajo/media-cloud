import * as types from '../actions/ActionTypes';
import { updateObject } from '../../shared/utility';
import { FolderState, File } from '../types';

const initialState: FolderState = {
    currentPath: "",
    folders: [],
    createFolderError: null,
    creating: false,
    createSuccess: false,
    removing: false,
}

const changeFolder = (state: FolderState, payload: string) => {
    return updateObject( state, {
        currentPath: payload
    });
}

const recoverFolders = (state: FolderState, payload: File[]) => {
    return updateObject( state, {
        folders: payload
    });
}

const recoverFail = (state: FolderState, payload: Error) => {
    return updateObject( state, {
        recoverError: payload
    })
}

const createFolder = (state: FolderState) => {
    return updateObject( state, {
        createFolderError: null,
        creating: true,
        createSuccess: false,
    });
}

const createFolderSuccess = (state: FolderState, payload: File) => {
    return updateObject( state, {
        creating: false,
        createSuccess: true,
        folders: state.folders.concat(payload),
    });
}

const createFolderFail = (state: FolderState, payload: Error) => {
    return updateObject( state, {
        creating: false,
        createFolderError: payload
    })
}

const removeFolder = (state: FolderState) => {
    return updateObject( state, {
        removing: true,
        removeError: null
    })
}

const removeFolderSuccess = (state: FolderState, payload: string) => {
    return updateObject( state, {
        folders: state.folders.filter(folder => folder.key !== payload),
        removing: false
    })
}

const removeFail = (state: FolderState, payload: Error) => {
    return updateObject( state, {
        removeError: payload,
        removing: false
    })
}


const reducer = ( state = initialState, action: types.ActionTypes ) => {
    switch (action.type) {
        case types.CHANGE_FOLDER: return changeFolder(state, action.payload);
        case types.RECOVER_FOLDERS: return recoverFolders(state, action.payload);
        case types.RECOVER_FOLDERS_NOK: return recoverFail(state, action.payload);
        case types.CREATE_FOLDER: return createFolder(state);
        case types.CREATE_FOLDER_OK: return createFolderSuccess(state, action.payload);
        case types.CREATE_FOLDER_NOK: return createFolderFail(state, action.payload);
        case types.REMOVE_FOLDER: return removeFolder(state);
        case types.REMOVE_FOLDER_OK: return removeFolderSuccess(state, action.payload);
        case types.REMOVE_FOLDER_NOK: return removeFail(state, action.payload);
        default: return state;
    }
}

export default reducer;
