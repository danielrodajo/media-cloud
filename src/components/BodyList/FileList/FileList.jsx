import React from 'react';
import './FileList.css';
import { S3Image } from 'aws-amplify-react';

const FileList = props => {
    return (
        <div className="FileList">
            {
                props.files.map(filedata => (
                    <div key={filedata.key}>
                        <S3Image key={filedata.key} level="protected" imgKey={filedata.key}/>
                        <h5>{filedata.key}</h5>
                    </div>                  
                ))
            }
        </div>
    );
}
 
export default FileList;