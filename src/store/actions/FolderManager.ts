import * as types from './ActionTypes';
import { Storage } from 'aws-amplify';


export const changeFolder = (path: string) => {
    return (dispatch: any) => {
        dispatch({
            type: types.CHANGE_FOLDER,
            payload: path
        });
    }
}

//Creacion de carpeta vacia
export const createFolder = (name: string) => {
    return (dispatch: any) => {
        dispatch({type: types.CREATE_FOLDER});
        //Creamos un fichero default puesto que las carpetas en S3 no pueden estar vacias
        Storage.put(name+"/default", new File(["foo"], "foo.txt"))
        .then((result: any) => {
            dispatch({
                type: types.CREATE_FOLDER_OK,
                payload: result
            })
        }
        )
        .catch(err => {
            console.log(err);
            dispatch({
                type: types.CREATE_FOLDER_NOK,
                payload: err
            });
        });
    }
}

//Borra carpeta SOLO SI SE ENCUENTRA VACIA
export const removeFolder = (name: string) => {
    return (dispatch: any) => {
        dispatch({
            type: types.REMOVE_FOLDER
        })
        const path = name.split("default")[0];
        Storage.list(path, {level: 'protected'})
        .then(async(result) => {
            for (var i=0; i<result.length; i++) {
                await Storage.remove(result[i].key);
            }
            dispatch({
                type: types.REMOVE_FOLDER_OK,
                payload: name
            })
        })
        .catch(err => {
            console.log(err);
            dispatch({
                type: types.REMOVE_FOLDER_NOK,
                payload: err
            });
        });
    }
}