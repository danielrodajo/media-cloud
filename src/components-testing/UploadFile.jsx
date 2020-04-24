import React, { Fragment } from 'react';
import MessageError from '../shared/MessageError';

const UploadFile = props => {
    
    const submit = evt => {
        evt.preventDefault();
        const form = document.getElementById('upload-form');
        const file = document.getElementById('fileinput').files[0];
        const name = file.name;   
        //Subir el fichero a S3
        props.upload(name, file);
        //Vaciar campo despues de enviarlo
        form.reset();
    }

    return (
        <Fragment>
            {
                (props.uploadError) ? <MessageError error={props.uploadError.message} /> : <Fragment></Fragment>
            }
            <form id="upload-form" onSubmit={submit}>
                <input type="file" id='fileinput'></input>
                <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
        </Fragment>      
    );
}
 
export default UploadFile;