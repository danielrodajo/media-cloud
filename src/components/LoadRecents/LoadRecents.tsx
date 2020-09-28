import React, { useEffect, useCallback } from 'react';
import CustomSpinner from '../CustomSpinner/CustomSpinner';
import { File as CustomFile } from "../../store/types";
import FileBox from '../FileBox/FileBox';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import * as actions from "../../store/actions/index";

interface props {
    maxFiles: number
}

const LoadRecents: React.FC<props> = props => {

    const dispatch = useDispatch();
    
    const downloading = useSelector(
        (state: RootState) => state.FileReducer.downloading
    );
    

    const files: CustomFile[] = useSelector((state: RootState) => {
        return state.FileReducer.files;
    });


    const onGetFiles = useCallback(() => dispatch(actions.recoverRecentFiles(props.maxFiles)), [dispatch]);

    const recoverError = useSelector(
        (state: RootState) => state.FileReducer.recoverError
    );

    const removeFile = (name: string) => dispatch(actions.removeFile(name));
    const removeError = useSelector(
        (state: RootState) => state.FileReducer.removeError
    );

    useEffect(() => {
        onGetFiles();
    }, [props.maxFiles, onGetFiles]);


    return (
        <React.Fragment>
        {
            //Mostrar Spinner mientras se descargan los ficheros
            downloading ? (
              <CustomSpinner />
            ) : (
              <React.Fragment>       
                {recoverError ? <span>{recoverError.message}</span> : null}
                {
                  files.slice(0, props.maxFiles)
                  .map(file => 
                    <FileBox
                      key={file.key}
                      file={file}
                      remove={removeFile}
                      removeError={removeError}
                    />
                  )
                }           
              </React.Fragment>
            )}
            </React.Fragment>
    );

}

export default LoadRecents;