import React, { useEffect, useCallback, Fragment } from 'react';
import { useDispatch, useSelector } from "react-redux";
import * as actions from '../store/actions/index';
import ShowFiles from '../components-testing/ShowFiles';
import UploadFile from '../components-testing/UploadFile';

const FileManager = () => {

    const dispatch = useDispatch();

    const files = useSelector((state) => {
        return state.FileReducer.files;
    });

    const onGetFiles = useCallback(() => dispatch(actions.recoverFiles()), [dispatch]);

    const uploadFile = (name, file) => dispatch(actions.uploadFile(name, file));

    const downloadFile = (name) => dispatch(actions.downloadFile(name));

    useEffect(() => {
        onGetFiles();
    }, [onGetFiles]);

    return (
        <Fragment>
            <ShowFiles files={files} download={downloadFile}/>   
            <UploadFile upload={uploadFile}/> 
        </Fragment>    
    );
}
 
export default FileManager;