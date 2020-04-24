import React, { Fragment } from 'react';

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
                (props.uploadError) ? <p>Error de subida: no se puede subir el/los fichero</p> : <Fragment></Fragment>
            }
            <form id="upload-form" onSubmit={submit}>
                <input type="file" id='fileinput'></input>
                <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
        </Fragment>      
    );
}
 
export default UploadFile;