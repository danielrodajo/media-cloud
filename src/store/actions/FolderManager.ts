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
        Storage.remove(name)
        .then(() =>
        dispatch({
            type: types.REMOVE_FOLDER,
            payload: name
        })
        ).catch(err => {
            console.log(err);
            dispatch({
                type: types.REMOVE_FOLDER_NOK,
                payload: err
            });
        })
    }
}