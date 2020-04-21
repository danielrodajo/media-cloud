import * as types from '../actions/ActionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    files: []
}

const recoverFiles = (state, action) => {   
    return updateObject( state, {
        files: action.files 
    });
}

const uploadFile = (state, action) => {
    const updatedFiles = state.files.push(action.file);
    return updateObject( state, {
        files: updatedFiles
    });
}


const reducer = ( state = initialState, action ) => {
    switch (action.type) {
        case types.RECOVER_FILES: return recoverFiles(state, action);
        case types.UPLOAD_FILE: return uploadFile(state, action);
        default: return state;
    }
}

export default reducer;
