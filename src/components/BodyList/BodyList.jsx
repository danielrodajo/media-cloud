import React from 'react'
import MenuList from './MenuList/MenuList'
import FileList from './FileList/FileList'
import Modal from '../Modal/Modal';

const BodyList = props => {
    return (
        <div>
            <Modal show={props.adding}/>
            <MenuList text="Archivos Recientes"/>
            {             
                (Array.isArray(props.files) && props.files.length) ? <FileList files={props.files}/> : <p>No hay archivos.</p>
            }
            
        </div>
    );
}
 
export default BodyList;