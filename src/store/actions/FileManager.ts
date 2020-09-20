import * as types from './ActionTypes';
import { Storage } from 'aws-amplify';
import { File as CustomFile } from '../types';

    
//Recupera TODOS los ficheros del bucket del usuario autenticado
export const recoverFiles = () => {
    return (dispatch: any) => {  
        //Obtener todos los ficheros (nombre y eTag)
        Storage.list('', {level: 'protected'})
        .then((result: any) => {

            //A cada fichero, recuperar su URL
            let promises = result.filter((file: CustomFile) => file.key !== 'default').map(async (file: CustomFile) => {
                const result = await Storage.get(file.key);
                return file = { ...file, url: result+"" };
            });     
            //Ejecutamos promesas recuperadas y almacenamos el resultado en la store
            Promise.all(promises)
            .then(result => {
                dispatch({
                    type: types.RECOVER_FILES,
                    payload: result
                })
            });          
        }).catch((err) => {
            console.log(err);
            if (err.message !== "Cannot read property 'map' of undefined") {
                dispatch({
                    type: types.RECOVER_FILES_NOK,
                    payload: err
                });
            }       
        });
    }
}

//Subida de un fichero
export const uploadFile = (name: string, file: File) => {
    return (dispatch: any) => {
        Storage.put(name, file)
        .then((result: any) => {
            //Agregar al objeto recuperado su URL
            Storage.get(result.key)
            .then((result2: any) => {
                const newFile: CustomFile = {
                    ...result, 
                    url: result2,
                    eTag: "",
                    size: file.size
                }
                console.log(newFile)
                dispatch({
                    type: types.UPLOAD_FILE,
                    payload: newFile
                })
            });
            
        }).catch(err => {
            console.log(err);
            dispatch({
                type: types.UPLOAD_FILE_NOK,
                payload: err
            });
        });
    }   
}

export  const removeFile = (name: string) => {
    return (dispatch: any) => {
        Storage.remove(name)
        .then(() =>
        dispatch({
            type: types.REMOVE_FILE,
            payload: name
        })
        ).catch(err => {
            console.log(err);
            dispatch({
                type: types.REMOVE_FILE_NOK,
                payload: err
            });
        })
    }
}