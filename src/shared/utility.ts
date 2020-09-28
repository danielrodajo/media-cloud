import txt from '../default-images/txt.jpg';
import word from '../default-images/word.jpg';
import pdf from '../default-images/pdf.jpg';
import excel from '../default-images/excel.jpg';
import defaultFile from '../default-images/default-file.png';

export const updateObject = (oldObject: any, updatedProperties: any) => {
    return {
        ...oldObject,
        ...updatedProperties
    };
};

//Devuelve una imagen por defecto en caso de no ser una imagen el propio fichero
export const formatDisplayImage = (name: string, source: string) => {
    const extension = name.split('.').pop(); 
    switch (extension) {
        case "txt": return txt;
        case "doc":
        case "docx":
             return word;
        case "pdf": return pdf;
        case "xls":
        case "xlsx":
            return excel;
        case "jpg":
        case "jpeg":
        case "tiff":
        case "raw":
        case "png":
        case "gif":
            return source;
        default: return defaultFile;
    }
};