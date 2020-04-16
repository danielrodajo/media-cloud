import React from 'react';
import './FileList.css';

const FileList = props => {
    return (
        <div className="FileList">
            {
                props.files.map(file => (
                    <div key={file}>
                        <img src="" alt="IMAGEN" />
                        <h5>{file}</h5>
                    </div>
                    
                ))
            }
        </div>
    );
}
 
export default FileList;