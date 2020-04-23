import React, { Fragment } from 'react';
import ShowFile from './ShowFile';

const ShowFiles = (props) => {

    return ( 
        <Fragment>
            {
                props.files.map(file => (
                    <div key={file.key}>
                        <ShowFile file={file} />
                    </div> 
                ))
            }
        </Fragment>
     );
}
 
export default ShowFiles;