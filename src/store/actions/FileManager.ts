import * as types from './ActionTypes';
import { Storage } from 'aws-amplify';
import { File as CustomFile } from '../types';
import { delay } from '../../shared/utility';

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
                const slices = result.key.split("/");
                const newFile: CustomFile = {
                    ...result, 
                    url: result2,
                    eTag: "",
                    size: file.size,
                    shared: false,
                    name: slices[slices.length-1]
                };
                dispatch({
                    type: types.UPLOAD_FILE_OK_WAIT,
                    payload: newFile
                });

                (async () => {
                    //Delay para que se realice la animacion de subida
                    await delay(2000);

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

export const uploadUserImage = (userId: string, file: File) => {
    return (dispatch: any) => {
        dispatch({
            type: types.UPLOAD_USER_IMAGE
        })
        Storage.put(userId, file, {
            level: 'public',
            progressCallback(progress: any) {
                dispatch({
                    type: types.UPLOADING_USER_IMAGE,
                    payload: {
                        loaded: progress.loaded,
                        total: progress.total
                    }
                });
            }
        })
        .then((result: any) => {
            //Agregar al objeto recuperado su URL
            Storage.get(result.key, {level: 'public'})
            .then((result2: any) => {
                dispatch({
                    type: types.UPLOAD_USER_IMAGE_OK_WAIT,
                    payload: result2
                });

                (async () => {
                    dispatch({
                        type: types.UPLOAD_USER_IMAGE_OK,
                    });
                })();              
            });           
        }).catch(err => {
            console.log(err);
            dispatch({
                type: types.UPLOAD_USER_IMAGE_NOK,
                payload: err
            });
        });
    }
}

export const removeUserImage = (userId: string) => {
    return (dispatch: any) => {
        dispatch({
            type: types.REMOVE_USER_IMAGE
        })
        Storage.remove(userId, {level: 'public'})
        .then(() =>
        dispatch({
            type: types.REMOVE_USER_IMAGE_OK
        })
        ).catch(err => {
            console.log(err);
            dispatch({
                type: types.REMOVE_USER_IMAGE_NOK,
                payload: err
            });
        })
    }
}