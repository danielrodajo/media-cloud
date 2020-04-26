import React, { useEffect, useCallback, Fragment } from 'react';
import { useDispatch, useSelector } from "react-redux";
import * as actions from '../store/actions/index';
import ShowFiles from '../components-testing/ShowFiles';
import UploadFile from '../components-testing/UploadFile';
import MessageError from '../shared/MessageError';
import SignOut from './Auth/SignOut/SignOut';

const FileManager = () => {

    const dispatch = useDispatch();

    const files = useSelector((state) => {
        return state.FileReducer.files;
    });

    const onGetFiles = useCallback(() => dispatch(actions.recoverFiles()), [dispatch]);
    const recoverError = useSelector((state) => state.FileReducer.recoverError);

    const uploadFile = (name, file) => dispatch(actions.uploadFile(name, file));
    const uploadError = useSelector((state) => state.FileReducer.uploadError);

    const removeFile = (name) => dispatch(actions.removeFile(name));
    const removeError = useSelector((state) => state.FileReducer.removeError);

    useEffect(() => {
        onGetFiles();
    }, [onGetFiles]);

    return (
        <Fragment>
            <SignOut />
            {
                (recoverError) ? <MessageError error={recoverError.message} /> : <ShowFiles files={files} remove={removeFile} removeError={removeError} />
            } 
            <UploadFile upload={uploadFile} uploadError={uploadError}/> 
        </Fragment>    
    );
}
 
export default FileManager;