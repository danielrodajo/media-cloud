import React from 'react';
import './FileList.css';

const FileList = props => {
    return (
        <div className="FileList">
            {
                props.files.map(filedata => (
                    <div key={filedata}>
                        <img src={filedata.file} alt={filedata.filename} />
                        <h5>{filedata.filename}</h5>
                    </div>                  
                ))
            }
        </div>
    );
}
 
export default FileList;