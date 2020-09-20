import * as types from '../actions/ActionTypes';
import { updateObject } from '../../shared/utility';
import { FileState, File } from '../types';

const initialState: FileState = {
    files: [],
    recoverError: null,
    uploadError: null,
    removeError: null,
    uploading: false,
    loadedFile: 0,
    totalFile: 0,
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


//Reseteamos valores de visualizacion de la subida
const uploadFile = (state: FileState) => {
    return updateObject( state, {
        uploading: true,
        loadedFile: 0,
        totalFile: 1,
    });
}

const uploadingFile = (state: FileState, payload: {
    loaded: number
    total: number
}) => {
    return updateObject( state, {
        loadedFile: payload.loaded,
        totalFile: payload.total,
    });
}

const uploadFileSuccess = (state: FileState, payload: File) => {
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
        case types.UPLOAD_FILE: return uploadFile(state);
        case types.UPLOADING_FILE: return uploadingFile(state, action.payload);
        case types.UPLOAD_FILE_OK: return uploadFileSuccess(state, action.payload);
        case types.UPLOAD_FILE_NOK: return uploadFail(state, action.payload);
        case types.REMOVE_FILE: return removeFile(state, action.payload);
        case types.REMOVE_FILE_NOK: return removeFail(state, action.payload);
        default: return state;
    }
}

export default reducer;
