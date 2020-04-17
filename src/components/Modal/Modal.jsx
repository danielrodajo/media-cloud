import React from 'react';
import { Storage } from 'aws-amplify';

const Modal = () => {

    const submit = evt => {
        evt.preventDefault();
        const file = document.getElementById('fileinput').files[0];
            const name = file.name;       
            Storage.put(name, file);     
    };

    return (
        <div>
            <form action=""  onSubmit={submit}>
            <div className="row">
                    <input className="col-sm-12" type="file" id="fileinput"/>
                </div>
                <div className="row mt-3">
                    <button className="btn btn-primary" type="submit">Enviar</button>
                    <button className="ml-2 btn btn-secondary" type="reset">Vaciar</button>
                </div>    
            </form>
        </div>
    );
}
 
export default Modal;