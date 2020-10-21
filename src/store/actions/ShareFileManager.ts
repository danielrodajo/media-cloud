import * as types from './ActionTypes';
import { Storage, API, graphqlOperation } from 'aws-amplify';
import * as Mutations from '../../graphql/mutations';

export const sharingFile = (filePath: any, userId: String) => {
    return (dispatch: any) => {
        dispatch({
            type: types.SHARING_FILE
        });
        //Generamos registro de que el fichero de un usuario es para compartir
        (API.graphql(graphqlOperation(Mutations.createSharedFile, {input: {path: filePath, sharedFileOwnerId: userId}})) as Promise<any>)
        .then(() => {
            dispatch({
                type: types.SHARING_FILE_OK
            })
        })
        .catch((err:any) => {
            dispatch({
                type: types.SHARING_FILE_NOK,
                payload: err
            })
        });
    }
}

export const shareFileToFriend = () => {

}

export const stopSharingFileToFriend = () => {
    
}

export const stopSharingFile = () => {
    return (dispatch: any) => {
        dispatch({
            type: types.STOP_SHARING_FILE
        });
    }
}

export const recoverShareFiles = (filePaths: any, userId: String) => {
    return (dispatch: any) => {
        dispatch({
            type: types.RECOVER_SHARE_FILES
        });
        const files: any = [];
        filePaths.forEach((filePath: any, index: number) => {
            Storage.list(filePath, {
                level: 'protected',
                identityId: userId
            })
            .then(async (file: any) => {
                file = file[0]
                const result = await Storage.get(file.key);
                const slices = file.key.split("/");
                file = { ...file, url: result+"", name: slices[slices.length-1] };
                files.push(file);

                if (index === filePaths.length-1) {
                    dispatch({
                        type: types.RECOVER_SHARE_FILES_OK,
                        payload: files 
                    });
                }
            })
            .catch(err => {
                console.log(err);
                dispatch({
                    type: types.RECOVER_SHARE_FILES_NOK,
                    payload: err
                })
            });
        });    
        

    }
}