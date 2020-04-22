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
        }).catch(err => {
            console.log(err);
            dispatch({
                type: types.RECOVER_FILES_NOK,
                error: err
            });
        });
    }
}

export const uploadFile = (name, file) => {
    return (dispatch) => {
        Storage.put(name, file)
        .then(result => {
            dispatch({
                type: types.UPLOAD_FILE,
                file: result
            })
        }).catch(err => {
            console.log(err);
            dispatch({
                type: types.UPLOAD_FILE_NOK,
                error: err
            });
        });
    }   
}

export const downloadFile = (name) => {
    return (dispatch) => {
        Storage.get(name)
        .then(result => {
            console.log(result)
            dispatch({
                type: types.DOWNLOAD_FILE,
                url: result
            })
        })
        .catch(err => {
            console.log(err)
            dispatch({
                type: types.DOWNLOAD_FILE_NOK,
                error: err
            })
        });
    }
}