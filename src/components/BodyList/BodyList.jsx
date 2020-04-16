import React from 'react'
import MenuList from './MenuList/MenuList'
import FileList from './FileList/FileList'

const BodyList = props => {
    return (
        <div>
            <MenuList text="Archivos Recientes"/>
            <FileList files={props.files}/>
        </div>
    );
}
 
export default BodyList;