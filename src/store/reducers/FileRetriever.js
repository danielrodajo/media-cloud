import * as types from '../actions/ActionTypes';
import { updateObject } from '../../shared/utility';
import logo from '../../assets/images/logo.png';

const initialState = {
    files: []
}

const recoverAllFiles = (state, action) => {
    return updateObject( state, {
        files: [
            {
                filename: 'prueba.png',
                file: logo
            },
            {
                filename: 'prueba2.png',
                file: logo
            },
            {
                filename: 'prueba3.png',
                file: logo
            },
            {
                filename: 'prueba4.png',
                file: logo
            },
            {
                filename: 'prueba5.png',
                file: logo
            },
            {
                filename: 'prueba6.png',
                file: logo
            },
            {
                filename: 'prueba7.png',
                file: logo
            },
        ]       
    })
}

const reducer = ( state = initialState, action ) => {
    switch (action.type) {
        case types.RECOVER_FILES: return recoverAllFiles(state, action);
        default: return state;
    }
}

export default reducer;
