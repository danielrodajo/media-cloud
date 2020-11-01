import txt from '../default-images/icons/txt.png';
import word from '../default-images/icons/doc.png';
import pdf from '../default-images/icons/pdf.png';
import excel from '../default-images/icons/xls.png';
import avi from '../default-images/icons/avi.png';
import cad from '../default-images/icons/cad.png';
import css from '../default-images/icons/css.png';
import dat from '../default-images/icons/dat.png';
import dll from '../default-images/icons/dll.png';
import dmg from '../default-images/icons/dmg.png';
import html from '../default-images/icons/html.png';
import iso from '../default-images/icons/iso.png';
import js from '../default-images/icons/js.png';
import mov from '../default-images/icons/mov.png';
import mp3 from '../default-images/icons/mp3.png';
import php from '../default-images/icons/php.png';
import ppt from '../default-images/icons/ppt.png';
import ps from '../default-images/icons/ps.png';
import psd from '../default-images/icons/psd.png';
import sql from '../default-images/icons/sql.png';
import svg from '../default-images/icons/svg.png';
import wmv from '../default-images/icons/wmv.png';
import zip from '../default-images/icons/zip.png';
import defaultFile from '../default-images/default.png';
import { NotificationType } from '../API';
import { API, graphqlOperation } from 'aws-amplify';
import * as Mutations from '../graphql/mutations';

export const updateObject = (oldObject: any, updatedProperties: any) => {
    return {
        ...oldObject,
        ...updatedProperties
    };
};

//Devuelve una imagen por defecto en caso de no ser una imagen el propio fichero
export const formatDisplayImage = (name: string, source: string) => {
    const extension = name.split('.').pop(); 
    switch (extension?.toLowerCase()) {
        case "avi":
            return avi;
        case "cad":
            return cad;
        case "css":
            return css;
        case "dat":
            return dat;
        case "dll":
            return dll;
        case "dmg":
            return dmg;
        case "doc":
        case "docx":
             return word;
        case "html":
            return html;
        case "iso":
            return iso;
        case "js":
        case "json":
            return js;
        case "mov":
            return mov;
        case "mp3":
            return mp3;
        case "php":
            return php; 
        case "pdf": 
            return pdf;
        case "ppt":
        case "pptx":
            return ppt;
        case "ps":
            return ps;
        case "psd":
            return psd;
        case "sql":
            return sql;
        case "svg":
            return svg;
        case "txt": 
            return txt;
        case "wmv":
            return wmv;
        case "xls":
        case "xlsx":
            return excel;
        case "zip":
        case "rar":
            return zip;
        case "tiff":
        case "tif":
        case "jpg":
        case "jpeg":
        case "png":
        case "raw":
        case "gif":
            return source;
        default: return defaultFile;
    }
};

export const generateNotification = async (userId: String, friendId: String, type: NotificationType) => {
    const friendRequestDetails = {
        id: friendId+""+userId+""+Date.now(), 
        friendRequestToId: friendId, 
        friendRequestFromId: userId,
        type: type,
    }
    await (API.graphql(graphqlOperation(Mutations.createFriendRequest, {input: friendRequestDetails})) as Promise<any>)
    .then(e => {
    })
    .catch(err => {
        console.log(err)
    })
}