import React, { useEffect, useCallback } from 'react';
import { connect, useDispatch, useSelector } from "react-redux";
import BodyList from '../../components/BodyList/BodyList';
import * as actions from '../../store/actions/index';

const FileRetriever = () => {

    const dispatch = useDispatch();

    const files = useSelector((state) => {
        return state.fileRetriever.files;
    });

    const onFiles = useCallback(() => dispatch(actions.recoverFiles()),[dispatch]);

    useEffect(() => {
        onFiles();
    }, [onFiles]);

    if (files) {
        return (
            <BodyList files={files} />
        );
    } else {
        return <h4>No hay archivos</h4>;
    }

    
}
 
export default FileRetriever;