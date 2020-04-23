import * as types from './ActionTypes';
import { Storage } from 'aws-amplify';

//Recupera TODOS los ficheros del bucket del usuario autenticado
export const recoverFiles = () => {
    return (dispatch) => {  
        //Obtener todos los ficheros (nombre y eTag)
        Storage.list('', {level: 'protected'})
        .then(result => {
            //A cada fichero, recuperar su URL
            let promises = result.map(file => {
                return Storage.get(file.key)
                //Agregar al objeto el nuevo valor recuperado
                .then(result => {
                    return file = {...file, url: result}
                });
            });     
            //Ejecutamos promesas recuperadas y almacenamos el resultado en la store
            Promise.all(promises)
            .then(result => {
                dispatch({
                    type: types.RECOVER_FILES,
                    files: result
                })
            });          
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