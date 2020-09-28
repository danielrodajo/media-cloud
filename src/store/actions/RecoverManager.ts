import * as types from './ActionTypes';
import { Storage } from 'aws-amplify';
import { File as CustomFile } from '../types';


//Recupera los N ficheros mas recientes
export const recoverRecentFiles = (maxFiles: number) => {
    return (dispatch: any) => {
        dispatch({
            type: types.RECOVER_FILES
        });
        Storage.list("", {level: 'protected'})
        .then((result: any) => {
            const files = result.filter((file: CustomFile) => (!file.key.endsWith('default')))
            .sort(function (a: File, b: File) {
                return b.lastModified - a.lastModified 
            })
            //En caso de introducir numero maximo de ficheros, cogemos esa cantidad del array total
            .slice(0, maxFiles);

            //A cada fichero, recuperar su URL
            let promises = files.map(async (file: CustomFile) => {
                const result = await Storage.get(file.key);
                const slices = file.key.split("/");
                return file = { ...file, url: result+"", name: slices[slices.length-1] };
            });     
            //Ejecutamos promesas recuperadas y almacenamos el resultado en la store
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
export const recoverFiles = (path: string) => {
    return (dispatch: any) => {  
        dispatch({
            type: types.RECOVER_FILES
        });
        //Obtener todos los ficheros (nombre y eTag)
        Storage.list(path, {level: 'protected'})
        .then((result: any) => {
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


            //A cada fichero, recuperar su URL
            let promises = files.map(async (file: CustomFile) => {
                const result = await Storage.get(file.key);
                const slices = file.key.split("/");
                return file = { ...file, url: result+"", name: slices[slices.length-1] };
            });     
            //Ejecutamos promesas recuperadas y almacenamos el resultado en la store
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