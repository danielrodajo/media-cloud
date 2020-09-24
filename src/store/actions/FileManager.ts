import * as types from './ActionTypes';
import { Storage } from 'aws-amplify';
import { File as CustomFile } from '../types';

function delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}

//Subida de un fichero
export const uploadFile = (name: string, file: File) => {
    return (dispatch: any) => {
        dispatch({type: types.UPLOAD_FILE});
        Storage.put(name, file, {
            progressCallback(progress: any) {
                dispatch({
                    type: types.UPLOADING_FILE,
                    payload: {
                        loaded: progress.loaded,
                        total: progress.total
                    }
                });
            }
        })
        .then((result: any) => {
            //Agregar al objeto recuperado su URL
            Storage.get(result.key)
            .then((result2: any) => {
                const newFile: CustomFile = {
                    ...result, 
                    url: result2,
                    eTag: "",
                    size: file.size
                };
                dispatch({
                    type: types.UPLOAD_FILE_OK_WAIT,
                    payload: newFile
                });

                (async () => {
                    await delay(2500);

                    dispatch({
                        type: types.UPLOAD_FILE_OK,
                    });
                })();
                
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