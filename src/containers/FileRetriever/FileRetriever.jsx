import React, { useEffect, useCallback } from 'react';
import { connect, useDispatch, useSelector } from "react-redux";
import BodyList from '../../components/BodyList/BodyList';
import * as actions from '../../store/actions/index';

const FileRetriever = () => {

    const dispatch = useDispatch();

    const files = useSelector((state) => {
        return state.fileRetriever.files;
    });

    const adding = useSelector((state) => {
        return state.fileRetriever.adding
    });

    const onGetFiles = useCallback(() => dispatch(actions.recoverFiles()),[dispatch]);

    useEffect(() => {
        onGetFiles();
    }, [onGetFiles]);

    return (
        <BodyList files={files} adding={adding}/>
    );
    
}
 
export default FileRetriever;