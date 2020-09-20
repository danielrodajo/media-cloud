import { IonContent, IonPage, IonGrid, IonRow, IonCol } from '@ionic/react';
import React, { useCallback, useEffect } from 'react';
import './Home.css';
import FileBox from '../../components/FileBox/FileBox';
import Toolbar from '../../components/ToolBar/Toolbar';
import { File as CustomFile } from '../../store/types';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import * as actions from '../../store/actions/index';


const Home: React.FC = props => {

  const dispatch = useDispatch();

  const files: CustomFile[] = useSelector((state: RootState) => {
      return state.FileReducer.files;
  });

  const onGetFiles = useCallback(() => dispatch(actions.recoverFiles()), [dispatch]);
  const recoverError = useSelector((state: RootState) => state.FileReducer.recoverError);

  const uploadFile = (name: string, file: File) => dispatch(actions.uploadFile(name, file));
  const uploadError = useSelector((state: RootState) => state.FileReducer.uploadError);

  const removeFile = (name: string) => dispatch(actions.removeFile(name));
  const removeError = useSelector((state: RootState) => state.FileReducer.removeError);

  useEffect(() => {
      onGetFiles();
  }, [onGetFiles]);


  return (
    <IonPage>
      <Toolbar/>
      <IonContent>
        <IonGrid>
          {         
            //GENERA TABLA DE DOS COLUMNAS CON LOS FICHEROS 

            //Generamos nº de filas
            //Por cada fila, generamos pares de columnas 
            files.map((file, index) => (
              (index < Math.ceil(files.length/2)) ?
              <IonRow key={file.key}>
                <IonCol>
                  <FileBox src={files[index*2].url} name={files[index*2].key} remove={removeFile} removeError={removeError} />
                </IonCol>
                {
                  //Comprobamos si nos pasamos del array de ficheros con el último de la fila
                  (index * 2 + 1 < files.length) ?
                  <IonCol>
                    <FileBox src={files[index*2+1].url} name={files[index*2+1].key} remove={removeFile} removeError={removeError} />
                  </IonCol>: <IonCol></IonCol>
                }
              </IonRow> : null
            ))
          }        
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
