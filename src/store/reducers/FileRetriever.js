import * as types from '../actions/ActionTypes';
import { updateObject } from '../../shared/utility';
import logo from '../../assets/images/logo.png';
import { addingFile } from '../actions';

const initialState = {
    files: [],
    adding: false
}

const recoverAllFiles = (state, action) => {   
    return updateObject( state, {
        files: action.files 
    })
}

const addingFiles = (state, action) => {
    return updateObject( state, {
        adding: true
    })
}

const reducer = ( state = initialState, action ) => {
    switch (action.type) {
        case types.RECOVER_FILES: return recoverAllFiles(state, action);
        case types.ADDING_FILE: return addingFiles(state, action);
        default: return state;
    }
}

export default reducer;
