import * as types from '../actions/ActionTypes';
import { updateObject } from '../../shared/utility';
import logo from '../../assets/images/logo.png';

const initialState = {
    files: []
}

const recoverAllFiles = (state, action) => {
    
    return updateObject( state, {
        files: action.files 
    })
}

const reducer = ( state = initialState, action ) => {
    switch (action.type) {
        case types.RECOVER_FILES: return recoverAllFiles(state, action);
        default: return state;
    }
}

export default reducer;
