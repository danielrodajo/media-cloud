import React from 'react';

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
        <form id="upload-form" onSubmit={submit}>
            <input type="file" id='fileinput'></input>
            <button type="submit" className="btn btn-primary">Enviar</button>
        </form>
    );
}
 
export default UploadFile;