import { IonContent, IonPage, IonGrid, IonRow, IonCol, IonText, IonItem, IonIcon } from '@ionic/react';
import React, { useCallback, useEffect } from 'react';
import './Home.css';
import FileBox from '../../components/FileBox/FileBox';
import Toolbar from '../../components/ToolBar/Toolbar';
import { File as CustomFile } from '../../store/types';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import * as actions from '../../store/actions/index';
import FolderBox from '../../components/FolderBox/FolderBox';
import { returnUpBackOutline } from 'ionicons/icons';

const Home: React.FC = () => {

  const goBackPath = (path: string) => {
    const slices = currentPath.split("/");
    const formatPath = currentPath.substring(0, path.length-slices[slices.length-1].length);

    //Controlamos si acaba en barra puesto que si no es la raiz, siempre acaba con esta y hay que quitarla
    return (formatPath.endsWith("/")) ? formatPath.substring(0, formatPath.length-1) : formatPath
  }

  const dispatch = useDispatch();
  
  const currentPath = useSelector((state: RootState) => state.FolderReducer.currentPath);

  const files: CustomFile[] = useSelector((state: RootState) => {
      return state.FileReducer.files;
  });

  const folders: CustomFile[] = useSelector((state: RootState) => {
      return state.FolderReducer.folders;
  });

  const changeFolder = (path: string) => dispatch(actions.changeFolder(path));

  const onGetFiles = useCallback((path) => dispatch(actions.recoverFiles(path)), [dispatch]);
  const recoverError = useSelector((state: RootState) => state.FileReducer.recoverError);

  const removeFile = (name: string) => dispatch(actions.removeFile(name));
  const removeError = useSelector((state: RootState) => state.FileReducer.removeError);

  const removeFolder = (name: string) => dispatch(actions.removeFolder(name));
  const removeFolderError = useSelector((state: RootState) => state.FolderReducer.removeError);

  useEffect(() => {
    onGetFiles(currentPath);
  }, [currentPath, onGetFiles]);


  return (
    <IonPage>
      <Toolbar/>
      <IonContent>
        {
          (currentPath !== "") ? 
          <IonItem button onClick={e => changeFolder(goBackPath(currentPath))}>
            <IonIcon icon={returnUpBackOutline}/>
          </IonItem>
          : null
        }
        {
          (recoverError) ? <span>{recoverError.message}</span> : null
        }
        <IonGrid>
          {
            (folders) ?
              folders.map((folder, index) => (
                (index < Math.ceil(folders.length/2)) ?
                <IonRow key={folder.key}>
                  <IonCol>
                    <FolderBox path={folders[index*2].key} onClick={changeFolder}/>
                  </IonCol>
                  {
                    //Comprobamos si nos pasamos del array de carpetas con el último de la fila
                    (index * 2 + 1 < folders.length) ?
                    <IonCol>
                      <FolderBox path={folders[index*2+1].key} onClick={changeFolder} />
                    </IonCol>: <IonCol></IonCol>
                  }
                </IonRow> : null
              ))
            : console.log(files)
          }
          {         
            //GENERA TABLA DE DOS COLUMNAS CON LOS FICHEROS 
            //Ordenamos ficheros por orden alfabetico en base a su nombre
            files.sort(function(a: CustomFile, b: CustomFile){
              if (a.key > b.key) {
                return 1;
              }
              if (a.key < b.key) {
                return -1;
              }
              return 0;    
            //Generamos nº de filas
            //Por cada fila, generamos pares de columnas 
            }).map((file, index) => {
              return (
              (index < Math.ceil(files.length/2)) ?
              <IonRow key={file.key}>
                <IonCol>
                  <FileBox file={files[index*2]} remove={removeFile} removeError={removeError} />
                </IonCol>
                {
                  //Comprobamos si nos pasamos del array de ficheros con el último de la fila
                  (index * 2 + 1 < files.length) ?
                  <IonCol>
                    <FileBox file={files[index*2+1]} remove={removeFile} removeError={removeError} />
                  </IonCol>: <IonCol></IonCol>
                }
              </IonRow> : null
            )})
          }        
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
