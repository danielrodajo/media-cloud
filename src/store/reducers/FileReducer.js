import * as types from '../actions/ActionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    files: [],
    url: null,
    recoverError: null,
    uploadError: null,
    downloadError: null,
}

const recoverFiles = (state, action) => {   
    return updateObject( state, {
        files: action.files 
    });
}

const recoverFail = (state, action) => {
    return updateObject( state, {
        recoverError: action.error
    })
}

const uploadFile = (state, action) => {
    return updateObject( state, {
        files: state.files.concat(action.file)
    });
}

const uploadFail = (state, action) => {
    return updateObject( state, {
        uploadError: action.error
    })
}

const downloadFile = (state, action) => {
    return updateObject( state, {
        url: action.url
    })
}

const downloadFail = (state, action) => {
    return updateObject( state, {
        downloadError: action.error
    })
}


const reducer = ( state = initialState, action ) => {
    switch (action.type) {
        case types.RECOVER_FILES: return recoverFiles(state, action);
        case types.RECOVER_FILES_NOK: return recoverFail(state, action);
        case types.UPLOAD_FILE: return uploadFile(state, action);
        case types.UPLOAD_FILE_NOK: return uploadFail(state, action);
        case types.DOWNLOAD_FILE: return downloadFile(state, action);
        case types.DOWNLOAD_FILE_NOK: return downloadFail(state, action);
        default: return state;
    }
}

export default reducer;
