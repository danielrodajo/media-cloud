import { useState } from "react";
import { useCamera } from '@ionic/react-hooks/camera';
import { CameraResultType, CameraSource } from "@capacitor/core";

//Parsea una URL para devolver un objeto tipo File
function urltoFile(url: any, filename: string, mimeType: string){
    return (fetch(url)
        .then(function(res){return res.arrayBuffer();})
        .then(function(buf){return new File([buf], filename,{type:mimeType});})
    );
}

export function usePhotoGallery() {
    const { getPhoto } = useCamera();
    const [photo, setPhoto] = useState<File | null>();

    const takePhoto = async () => {
        //Configuramos la camara para que devuelva una URI, desde la camara con la maxima calidad 
        const cameraPhoto = await getPhoto({
            resultType: CameraResultType.Uri,
            source: CameraSource.Prompt,
            quality: 100,
            promptLabelPhoto: "Buscar en la galería",
            promptLabelPicture: "Usar cámara",
        });
        //Damos nombre
        const fileName = new Date().getTime() + '.jpeg';

        //Parseamos foto a tipo File y guardamos en el estado del Hook
        urltoFile(cameraPhoto.webPath, fileName, 'image/jpeg')
        .then(function(file) {
            setPhoto(file);
        })
    };
  
    return {
        photo,
        setPhoto,
        takePhoto
      };
}