import * as types from '../actions/ActionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    files: [],
    recoverError: null,
    uploadError: null,
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



const reducer = ( state = initialState, action ) => {
    switch (action.type) {
        case types.RECOVER_FILES: return recoverFiles(state, action);
        case types.RECOVER_FILES_NOK: return recoverFail(state, action);
        case types.UPLOAD_FILE: return uploadFile(state, action);
        case types.UPLOAD_FILE_NOK: return uploadFail(state, action);
        default: return state;
    }
}

export default reducer;
