import React from 'react';
import { S3Image } from 'aws-amplify-react';

const ShowFile = props => {
    
    const download = (dataurl, filename) => {
        console.log(dataurl)
        var a = document.createElement("a");
        a.href = dataurl;
        a.setAttribute("download", filename);
        a.click();
      }

    return (
        <div className="container mb-5 mt-5">
            <S3Image key={props.file.key} level="protected" imgKey={props.file.key}/>
            <h5>{props.file.key}</h5>
            <button className="btn btn-primary" onClick={() => download(props.file.url, props.file.key)}>Descargar</button>
            <button className="btn btn-secondary" onClick={() => {props.remove(props.file.key)}}>Eliminar</button>
        </div>
    );
}
 
export default ShowFile;