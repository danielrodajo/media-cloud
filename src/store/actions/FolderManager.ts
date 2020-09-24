import * as types from './ActionTypes';
import { Storage } from 'aws-amplify';

//Creacion de carpeta vacia
export const createFolder = (name: string) => {
    return (dispatch: any) => {
        dispatch({type: types.CREATE_FOLDER});
        Storage.put(name+"/default", new File(["foo"], "foo.txt"))
        .then(
            dispatch({
                type: types.CREATE_FOLDER_OK
            })
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