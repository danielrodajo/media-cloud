import React, { Fragment } from 'react';
import { S3Image } from 'aws-amplify-react';
import { Storage } from 'aws-amplify';
import { useSelector } from 'react-redux';

const ShowFile = props => {

    const url = '';
    const download = (dataurl, filename) => {
        console.log(dataurl)
        var a = document.createElement("a");
        a.href = dataurl;
        a.setAttribute("download", filename);
        a.click();
      }

    return (
        <Fragment>
            <S3Image key={props.file.key} level="protected" imgKey={props.file.key}/>
            <h5>{props.file.key}</h5>
            <button className="btn btn-primary" onClick={() => download(props.file.url, props.file.key)}>Descargar</button>
        </Fragment>
    );
}
 
export default ShowFile;