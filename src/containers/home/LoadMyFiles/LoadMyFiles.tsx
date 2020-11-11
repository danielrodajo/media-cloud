import React, { useEffect, useCallback } from 'react';
import FolderBox from '../../../components/FolderBox/FolderBox';
import { File as CustomFile } from "../../../store/types";
import FileBox from '../../../components/FileBox/FileBox';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../store/store';
import * as actions from "../../../store/actions/index";
import CustomLoadingPage, { LoadingType } from '../../../components/CustomLoadingPage/CustomLoadingPage';
import EmptyFolder from '../../../components/EmptyFolder/EmptyFolder';
import FolderMenu from './FolderMenu/FolderMenu';
import CustomLoading from '../../../components/CustomLoading/CustomLoading';

interface props {
  user: any
}

const LoadMyFiles:React.FC<props> = props => {

    const dispatch = useDispatch();
    
    const downloading = useSelector(
        (state: RootState) => state.FileReducer.downloading
    );

    const removing = useSelector(
      (state: RootState) => state.FolderReducer.removing
    );

    const currentPath = useSelector(
      (state: RootState) => state.FolderReducer.currentPath
    );
    

    const files: CustomFile[] = useSelector((state: RootState) => {
        return state.FileReducer.files;
    });

    const folders: CustomFile[] = useSelector((state: RootState) => {
        return state.FolderReducer.folders;
    });

    
    //Devuelve un nivel anterior a la ruta introducida (retrocede)
    const goBackPath = (path: string) => {
        const slices = currentPath.split("/");
        const formatPath = currentPath.substring(
        0,
        path.length - slices[slices.length - 1].length
        );

        //Controlamos si acaba en barra puesto que si no es la raiz, siempre acaba con esta y hay que quitarla
        return formatPath.endsWith("/")
        ? formatPath.substring(0, formatPath.length - 1)
        : formatPath;
    };


    const changeFolder = (path: string) => dispatch(actions.changeFolder(path));

    const onGetFiles = useCallback(
        (path) => dispatch(actions.recoverFiles(props.user.identityId, path)),
        [dispatch, props.user.identityId]
    );
    const recoverError = useSelector(
        (state: RootState) => state.FileReducer.recoverError
    );

    const removeFile = (name: string) => dispatch(actions.removeFile(name));
    const removeError = useSelector(
        (state: RootState) => state.FileReducer.removeError
    );

    const removeFolder = (name: string) => dispatch(actions.removeFolder(name));

    useEffect(() => {
        let isMounted = true;
        if (isMounted)
          onGetFiles(currentPath);
        return () => {isMounted = false}
    }, [currentPath, onGetFiles]);

    const handleRemoveFolder = (path: string) => {
        //Eliminamos carpeta
        removeFolder(path);
        //Volvemos a la carpeta padre despues de borrarla
        changeFolder(goBackPath(currentPath));
    };

    const handleReturnFolder = (path: string) => {
      changeFolder(goBackPath(path))
    }

    return (
        <React.Fragment>
          <CustomLoading showLoading={removing}/>
        {
            //Mostrar Spinner mientras se descargan los ficheros
            downloading ? (
              <CustomLoadingPage type={LoadingType.Files} />
            ) : (
              <React.Fragment>
                {
                //En caso de estar dentro de una carpeta, mostrar barra de retroceder, borrar y ver carpeta
                currentPath !== "" && 
                  <FolderMenu 
                    currentPath={currentPath}
                    handleRemoveFolder={handleRemoveFolder}
                    handleReturnFolder={handleReturnFolder}
                  />}
                
                {recoverError && <span>{recoverError.message}</span>}
    
                {
                  folders.length === 0 && files.length === 0 
                  ? <EmptyFolder />
                  :
                  <React.Fragment>
                  {
                    folders.map(folder => 
                    <FolderBox
                      key={folder.key}
                      path={folder.key}
                      onClick={changeFolder}
                    />
                    )
                  }
                  {
                    files
                    .sort(function (a: CustomFile, b: CustomFile) {
                      if (a.key > b.key) {
                        return 1;
                      }
                      if (a.key < b.key) {
                        return -1;
                      }
                      return 0;
                    })
                    .map(file => 
                      <FileBox
                        key={file.key}
                        file={file}
                        remove={removeFile}
                        removeError={removeError}
                        isAbsolutePath={true}
                      />
                    )
                  }
                  </React.Fragment>
                }
                
                
              </React.Fragment>
            )}
            </React.Fragment>
    );

}

export default LoadMyFiles;