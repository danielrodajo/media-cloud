import * as types from './ActionTypes';
import { Storage, API, graphqlOperation } from 'aws-amplify';
import { File as CustomFile } from '../types';
import * as Queries from '../../graphql/queries';

//Recupera los N ficheros mas recientes
export const recoverRecentFiles = (userId: String, maxFiles: number) => {
    return (dispatch: any) => {
        dispatch({
            type: types.RECOVER_FILES
        });
        Storage.list("", {level: 'protected'})
        .then(async(result: any) => {
            const files = result.filter((file: CustomFile) => (!file.key.endsWith('default')))
            .sort(function (a: File, b: File) {
                return b.lastModified - a.lastModified 
            })
            //En caso de introducir numero maximo de ficheros, cogemos esa cantidad del array total
            .slice(0, maxFiles);
            let promises = await fillDataFiles(userId, files); 
            Promise.all(promises)
            .then(result => {
                dispatch({
                    type: types.RECOVER_FILES_OK,
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

//Recupera TODOS los ficheros del bucket del usuario autenticado
export const recoverFiles = (userId: String, path: string) => {
    return (dispatch: any) => {  
        dispatch({
            type: types.RECOVER_FILES
        });
        //Obtener todos los ficheros (nombre y eTag)
        Storage.list(path, {level: 'protected'})
        .then(async (result: any) => {
            //Separamos ficheros de carpetas
            const folders = result.filter((file: CustomFile) => 
                //Localizamos carpetas por su fichero default
                file.key.endsWith('default') && 
                //Evitamos meter el fichero default de la carpeta como una carpeta en sí misma
                file.key !== path+"/default" &&
                //Respetamos que no se acoplen carpetas de otros niveles
                path.split("/").length === file.key.split("/").length-2
            );
            dispatch({
                type: types.RECOVER_FOLDERS,
                payload: folders
            });
            

            //Aseguramos que se muestren los ficheros correspondientes de su nivel
            const files = result.filter((file: CustomFile) => (!file.key.endsWith('default') 
            && ((path === "" && !file.key.includes("/")) || (path !== "" && file.key.startsWith(path+"/") && file.key.split("/").length-1 === path.split("/").length))));

            let promises = await fillDataFiles(userId, files); 
            Promise.all(promises)
            .then(result => {
                dispatch({
                    type: types.RECOVER_FILES_OK,
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

export const recoverFilesByName= (userId: String, name: string) => {
    return (dispatch: any) => { 
        dispatch({
            type: types.RECOVER_FILTER_FILES
        });
        if (name === "") {
            dispatch({
                type: types.RECOVER_FILTER_FILES_OK,
                payload: []
            })
            return;
        }
        Storage.list("", {level: 'protected'})
        .then(async(result: any) => {
            const files = result.filter((file: CustomFile) => (!file.key.endsWith('default')))
            .filter((file: CustomFile) => file.key.includes(name));

            let promises = await fillDataFiles(userId, files);  
            Promise.all(promises)
            .then(result => {
                dispatch({
                    type: types.RECOVER_FILTER_FILES_OK,
                    payload: result
                })
            });   
        })
        .catch((err) => {
            console.log(err);
            if (err.message !== "Cannot read property 'map' of undefined") {
                dispatch({
                    type: types.RECOVER_FILTER_FILES_NOK,
                    payload: err
                });
            }       
        });
    }
}


export const recoverUserImage = (userId: string) => {
    return (dispatch: any) => {
        dispatch({
            type: types.RECOVER_USER_IMAGE
        })
        Storage.get(userId, {level: 'public'})
        .then((result: any) => {
            dispatch({
                type: types.RECOVER_USER_IMAGE_OK,
                payload: result
            })
        })
        .catch(err => {
            console.log(err);
            dispatch({
                type: types.RECOVER_USER_IMAGE_NOK,
                payload: err
            });
        });

    }
}



//FUNCIONES PARA ACORTAR EL TAMAÑO DE LAS FUNCIONES SUPERIORES PRINCIPALES
async function fillDataFiles(userId: String, files: any) {
    let promises = files.map(async (file: CustomFile) => {
        const result = await Storage.get(file.key);
        const slices = file.key.split("/");
        //Comprobamos si está compartido o no
         const sharers = await fetchSharersFromFile(userId, file);
        return file = { 
            ...file, 
            sharers: sharers,
            shared: sharers.length !== 0 ? true : false, 
            url: result+"", 
            name: slices[slices.length-1] 
        };
    });  
    return promises;
}

async function fetchSharersFromFile(userId: String, file: any) {
    const pivotTable: any = await API.graphql(graphqlOperation(Queries.getSharedFile, {id: userId+file.key}));
    //Si el fichero esta compartido...
    if (pivotTable.data.getSharedFile !== null) {
        const sharers: any[] = [];
        for (const sharer of pivotTable.data.getSharedFile.Sharers.items) {
            const sharerDynamo: any = await API.graphql(graphqlOperation(Queries.getSharedFileToUser, {id: sharer.id}));
            sharers.push(sharerDynamo.data.getSharedFileToUser.sharer.id);
        }
        return sharers;
    }
    return [];    
}


