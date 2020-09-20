import * as types from '../actions/ActionTypes';
import { updateObject } from '../../shared/utility';
import { FileState, File } from '../types';

const initialState: FileState = {
    files: [],
    recoverError: null,
    uploadError: null,
    removeError: null,
}


const recoverFiles = (state: FileState, payload: File[]) => {
    return updateObject( state, {
        files: payload
    });
}

const recoverFail = (state: FileState, payload: Error) => {
    return updateObject( state, {
        recoverError: payload
    })
}


const uploadFile = (state: FileState, payload: File) => {
    console.log(payload)
    return updateObject( state, {
        files: state.files.concat(payload)
    });
}

const uploadFail = (state: FileState, payload: Error) => {
    return updateObject( state, {
        uploadError: payload
    })
}


const removeFile = (state: FileState, payload: string) => {
    return updateObject( state, {
        files: state.files.filter(file => file.key !== payload)
    })
}

const removeFail = (state: FileState, payload: Error) => {
    return updateObject( state, {
        removeError: payload
    })
}



const reducer = ( state = initialState, action: types.ActionTypes ) => {
    switch (action.type) {
        case types.RECOVER_FILES: return recoverFiles(state, action.payload);
        case types.RECOVER_FILES_NOK: return recoverFail(state, action.payload);
        case types.UPLOAD_FILE: return uploadFile(state, action.payload);
        case types.UPLOAD_FILE_NOK: return uploadFail(state, action.payload);
        case types.REMOVE_FILE: return removeFile(state, action.payload);
        case types.REMOVE_FILE_NOK: return removeFail(state, action.payload);
        default: return state;
    }
}

export default reducer;
