import React from 'react';
import './FileList.css';

const FileList = props => {
    return (
        <div className="FileList">
            {
                props.files.map(file => (
                    <h4 key={file}>{file}</h4>
                ))
            }
        </div>
    );
}
 
export default FileList;