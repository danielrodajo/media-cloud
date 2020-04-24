import React, { Fragment } from 'react';
import ShowFile from './ShowFile';

const ShowFiles = (props) => {

    return ( 
        <Fragment>
            {
                (Array.isArray(props.files) && props.files.length) ? props.files.map(file => (
                    <div key={file.key}>
                        <ShowFile file={file}  remove={props.remove} removeError={props.removeError}/>
                    </div> 
                )) : <span>No has subido archivos todavía</span>
            }
        </Fragment>
     );
}
 
export default ShowFiles;