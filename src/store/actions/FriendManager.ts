import * as types from './ActionTypes';
import { API, graphqlOperation, Storage } from 'aws-amplify';
import * as Queries from '../../graphql/queries';
import * as Mutations from '../../graphql/mutations';
import { File } from '../types';

export const getFriends = (userId: string) => {
    return (dispatch: any) => {
        dispatch({
            type: types.RECOVER_FRIENDS
        });
        (API.graphql(graphqlOperation(Queries.getUser, {id: userId})) as Promise<any>)
        .then(async(result: any) => {
            const resultFriends = await recoverUserImageFriends(result.data.getUser.friends.items);
            dispatch({
                type: types.RECOVER_FRIENDS_OK,
                payload: resultFriends
            });
        }).catch((err: any) => dispatch({
            type: types.RECOVER_FRIENDS_NOK,
            payload: err
        }))
    }
}

//Borra el amigo localmente, actualizando la lista de permisos 
export const deleteLocalFriend = (friendId: string, originalId: string, files: any) => {
    return (dispatch: any) => {
        //Sincronizar localmente
        deleteLocalGrants(files, originalId);
        dispatch({
            type: types.DELETE_FRIEND_OK,
            payload: friendId
        })
    }
}

export const deleteFriend = (friendId: string, originalId: string, userId: string, files: any) => {
    return (dispatch: any) => {
        dispatch({
            type: types.DELETE_FRIEND
        });
        //Borra de mi lista de amigos
        (API.graphql(graphqlOperation(Mutations.deleteFriend, {input: {id: friendId}})) as Promise<any>)
        .then(async() => {
            //Borrame de su lista de amigos
            await API.graphql(graphqlOperation(Mutations.deleteFriend, {input: {id: userId+originalId}}));

            //Realizar borrado de la comparticion de ficheros a este usuario
            await deleteCloudGrants(dispatch, userId, originalId);
            deleteLocalGrants(files, originalId);

            //Borrado desde la otra perspectiva
            await deleteCloudGrants(dispatch, originalId, userId);

            dispatch({
                type: types.DELETE_FRIEND_OK,
                payload: friendId
            });
        })
        .catch((err: any) => dispatch({
            type: types.DELETE_FRIEND_NOK,
            payload: err
        })) 
    }
}

export const addFriend = (friend: any) => {
    return (dispatch: any) => {
        dispatch({
            type: types.ADD_FRIEND_OK,
            payload: friend
        });
    }
}

//FUNCIONES AUXILIARES
function deleteLocalGrants(files: File[], friendId: string) {
    files.forEach((file: any) => {
        file.sharers = file.sharers.filter((sharer: String) => sharer !== friendId);
        if (file.sharers.length === 0) {
            file.shared = false;
        }
    })
}

async function deleteCloudGrants(dispatch: any, userId: string, friendId: string) {
    //Realizar borrado de la comparticion de ficheros a este usuario y viceversa
    (API.graphql(graphqlOperation(Queries.listSharedFileToUsers, {filter: {id: {beginsWith: userId, contains: friendId}}})) as Promise<any>)
    .then(async(result: any) => {
        for (const permission of result.data.listSharedFileToUsers.items) {

            await API.graphql(graphqlOperation(Mutations.deleteSharedFileToUser, {input: {id: permission.id}}));
            const promise: any = await API.graphql(graphqlOperation(Queries.getSharedFile, {id: permission.sharedFile.id}));

            if (promise.data.getSharedFile.Sharers.items.length === 0) 
                await API.graphql(graphqlOperation(Mutations.deleteSharedFile, {input: {id: permission.sharedFile.id}}));

        }
    })
    .catch(err => dispatch({
        type: types.DELETE_FRIEND_NOK,
        payload: err
    }));
}

async function recoverUserImageFriends(friends: any[]) {
    const result: any = [];
    const keyList: any[] = await Storage.list('', {level: 'public'});
    for (var i=0; i<friends.length; i++) {
        if (keyList.find(item => item.key === friends[i].originalId)) {
            await Storage.get(friends[i].originalId, {level: 'public'})
            .then((result2: any) => {
                result.push({...friends[i], userImage: result2})
            })
        } else {
            result.push({...friends[i], userImage: null});
        }
    }
    return result;
}