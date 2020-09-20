import txt from '../default-images/txt.jpg';
import word from '../default-images/word.jpg';
import pdf from '../default-images/pdf.jpg';

export const updateObject = (oldObject: any, updatedProperties: any) => {
    return {
        ...oldObject,
        ...updatedProperties
    };
};

export const formatDisplayImage = (name: string, source: string) => {
    const extension = name.split('.').pop(); 
    switch (extension) {
        case "txt": return txt;
        case "doc":
        case "docx":
             return word;
        case "pdf": return pdf;
        default: return source;
    }
};