import * as types from './ActionTypes';
import { Storage, API, graphqlOperation } from 'aws-amplify';
import * as Mutations from '../../graphql/mutations';
import * as Queries from '../../graphql/queries';

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


//Recupera los ficheros compartidos de un amigo al usuario
export const recoverShareFiles = (userId: String, friendId: String) => {
    return (dispatch: any) => {
        dispatch({
            type: types.RECOVER_SHARE_FILES
        });
        const files: any = [];
        const filePaths: any = [];
        (API.graphql(graphqlOperation(Queries.getUser, {id: userId})) as Promise<any>)
        .then((result: any) => {
            result.data.getUser.sharedFiles.items.forEach((pivotTable: any, index: number) => {
                (API.graphql(graphqlOperation(Queries.getSharedFileToUser, {id: pivotTable.id})) as Promise<any>)
                .then((result2: any) => {
                    filePaths.push(result2.data.getSharedFileToUser.sharedFile.path);

                    if (index+1 === result.data.getUser.sharedFiles.items.length) {
                        filePaths.forEach((filePath: any, index: number) => {
                            Storage.list(filePath, {
                                level: 'protected',
                                identityId: friendId
                            })
                            .then(async (file: any) => {
                                file = file[0]
                                const result = await Storage.get(file.key, {
                                    level: 'protected',
                                    identityId: friendId
                                });
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
                        })
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
        })
        .catch(err => {
            console.log(err);
            dispatch({
                type: types.RECOVER_SHARE_FILES_NOK,
                payload: err
            })
        });   
    }
}