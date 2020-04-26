import * as types from './ActionTypes';
import { Storage } from 'aws-amplify';
    
//Recupera TODOS los ficheros del bucket del usuario autenticado
export const recoverFiles = () => {
    return (dispatch) => {  
        //Obtener todos los ficheros (nombre y eTag)
        Storage.list('', {level: 'protected'})
        .then(result => {
            //A cada fichero, recuperar su URL
            let promises = result.filter(file => file.key !== 'default').map(async file => {
                const result = await Storage.get(file.key);
                return file = { ...file, url: result };
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
            if (err.message !== "Cannot read property 'map' of undefined") {
                dispatch({
                    type: types.RECOVER_FILES_NOK,
                    error: err
                });
            }       
        });
    }
}

//Subida de un fichero
export const uploadFile = (name, file) => {
    return (dispatch) => {
        Storage.put(name, file)
        .then(result => {
            //Agregar al objeto recuperado su URL
            Storage.get(result.key)
            .then(result2 => {
                const newFile = {...result, url: result2}
                dispatch({
                    type: types.UPLOAD_FILE,
                    file: newFile
                })
            });
            
        }).catch(err => {
            console.log(err);
            dispatch({
                type: types.UPLOAD_FILE_NOK,
                error: err
            });
        });
    }   
}

export  const removeFile = (name) => {
    return (dispatch) => {
        Storage.remove(name)
        .then(() =>
        dispatch({
            type: types.REMOVE_FILE,
            filename: name
        })
        ).catch(err => {
            console.log(err);
            dispatch({
                type: types.REMOVE_FILE_NOK,
                error: err
            });
        })
    }
}