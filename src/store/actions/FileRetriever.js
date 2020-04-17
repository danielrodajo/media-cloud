import * as types from './ActionTypes';
import { Storage } from 'aws-amplify';

export const recoverFiles = () => {
    return (dispatch) => {  
        Storage.list('', {level: 'protected'})
        .then(result => {
            dispatch({
                type: types.RECOVER_FILES,
                files: result
            })
        }).catch(err => console.log(err));
    }
}

export const addingFile = () => {
    return {
        type: types.ADDING_FILE
    }
}
