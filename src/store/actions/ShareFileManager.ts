import * as types from './ActionTypes';
import { Storage, API, graphqlOperation } from 'aws-amplify';
import * as Mutations from '../../graphql/mutations';

//Poner el fichero en ESTADO COMPARTIDO
export const sharingFile = (filePath: any, userId: String) => {
    return (dispatch: any) => {
        dispatch({
            type: types.SHARING_FILE
        });
        //Generamos registro de que el fichero de un usuario es para compartir
        (API.graphql(graphqlOperation(Mutations.createSharedFile, {input: {id: userId+filePath, path: filePath, sharedFileOwnerId: userId}})) as Promise<any>)
        .then(() => {
            dispatch({
                type: types.SHARING_FILE_OK,
                payload: filePath
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

//Quitar al fichero el ESTADO COMPARTIDO
export const stopSharingFile = (filePath: any, userId: String) => {
    return (dispatch: any) => {
        dispatch({
            type: types.STOP_SHARING_FILE
        });
        (API.graphql(graphqlOperation(Mutations.deleteSharedFile, {input: {id: userId+filePath}})) as Promise<any>)
        .then(() => {
            dispatch({
                type: types.STOP_SHARING_FILE_OK,
                payload: filePath
            })
        })
        .catch((err:any) => {
            dispatch({
                type: types.STOP_SHARING_FILE_NOK,
                payload: err
            })
        });
    }
}

//Dar acceso a un amigo a un fichero nuestro que esté en ESTADO COMPARTIDO
export const shareFileToFriend = (fileId: String, friendId: String) => {
    return (dispatch: any) => {
        dispatch({
            type: types.SHARE_FILE_WITH_FRIEND
        });
        (API.graphql(graphqlOperation(Mutations.createSharedFileToUser, 
            {
                input: {
                    id: fileId+""+friendId,
                    sharedFileToUserSharedFileId: fileId,  
                    sharedFileToUserSharerId: friendId
                }
            }
        )) as Promise<any>)
        .then(() => dispatch({
            type: types.SHARE_FILE_WITH_FRIEND_OK,
        }))
        .catch(err => dispatch({
            type: types.SHARE_FILE_WITH_FRIEND_NOK,
            payload: err
        }));
    }
}

//Dejar de dar acceso a un amigo a un fichero nuestro que esté en ESTADO COMPARTIDO
export const stopSharingFileToFriend = (fileId: String, friendId: String) => {
    console.log("PARAR COMPARTIR A AMIGO")
    return (dispatch: any) => {
        dispatch({
            type: types.STOP_SHARE_FILE_WITH_FRIEND
        });
        (API.graphql(graphqlOperation(Mutations.deleteSharedFileToUser, {input: {id: fileId+""+friendId}})) as Promise<any>)
        .then(() => dispatch({
            type: types.STOP_SHARE_FILE_WITH_FRIEND_OK,
        }))
        .catch(err => dispatch({
            type: types.STOP_SHARE_FILE_WITH_FRIEND_NOK,
            payload: err
        }));
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