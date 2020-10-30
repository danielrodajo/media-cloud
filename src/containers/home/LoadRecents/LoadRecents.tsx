import React, { useEffect, useCallback } from 'react';
import { File as CustomFile } from "../../../store/types";
import FileBox from '../../../components/FileBox/FileBox';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../store/store';
import * as actions from "../../../store/actions/index";
import CustomLoadingPage, { LoadingType } from '../../../components/CustomLoadingPage/CustomLoadingPage';
import EmptyFolderRecent from '../../../components/EmptyFolderRecent/EmptyFolderRecent';

interface props {
    maxFiles: number
    user: any
}

const LoadRecents: React.FC<props> = props => {

    const dispatch = useDispatch();
    
    const downloading = useSelector(
        (state: RootState) => state.FileReducer.downloading
    );
    

    const files: CustomFile[] = useSelector((state: RootState) => {
        return state.FileReducer.files;
    });


    const onGetFiles = useCallback((userId: String, maxFiles: number) => dispatch(actions.recoverRecentFiles(userId, maxFiles)), [dispatch]);

    const recoverError = useSelector(
        (state: RootState) => state.FileReducer.recoverError
    );

    const removeFile = (name: string) => dispatch(actions.removeFile(name));
    const removeError = useSelector(
        (state: RootState) => state.FileReducer.removeError
    );

    useEffect(() => {
        onGetFiles(props.user.identityId, props.maxFiles);
    }, [props.maxFiles, onGetFiles, props.user.identityId]);


    return (
        <React.Fragment>
        {
            //Mostrar Spinner mientras se descargan los ficheros
            downloading ? (
              <CustomLoadingPage type={LoadingType.Files} />
            ) : (
              <React.Fragment>       
                {recoverError ? <span>{recoverError.message}</span> : null}
                {
                  files.length === 0 ? 
                  <EmptyFolderRecent />
                  :
                  files.slice(0, props.maxFiles)
                  .map(file => 
                    <FileBox
                      key={file.key}
                      file={file}
                      remove={removeFile}
                      removeError={removeError}
                      isAbsolutePath={false}
                    />
                  )
                }           
              </React.Fragment>
            )}
            </React.Fragment>
    );

}

export default LoadRecents;