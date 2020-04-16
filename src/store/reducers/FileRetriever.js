import * as types from '../actions/ActionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    files: []
}

const recoverAllFiles = (state, action) => {
    return updateObject( state, {
        files: ['prueba.png', 'palermo.jpg', 'text.txt', 'text2.txt', 'text3.txt', 'text4.txt', 'text5.txt', 'text6.txt', 'text7.txt', 'text8.txt' , 'text9.txt']       
    })
}

const reducer = ( state = initialState, action ) => {
    switch (action.type) {
        case types.RECOVER_FILES: return recoverAllFiles(state, action);
        default: return state;
    }
}

export default reducer;
