import React, { useEffect, useCallback, Fragment } from 'react';
import { useDispatch, useSelector } from "react-redux";
import * as actions from '../store/actions/index';

const FileManager = () => {

    const dispatch = useDispatch();


    const files = useSelector((state) => {
        return state.FileManager.files;
    });

    const onGetFiles = useCallback(() => dispatch(actions.recoverFiles()), [dispatch]);

    useEffect(() => {
        onGetFiles();
    }, [onGetFiles]);

    return (
        <Fragment>      
        </Fragment>    
    );
    
}
 
export default FileManager;