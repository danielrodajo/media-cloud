import {
  IonContent,
  IonPage,
  IonGrid,
  IonRow,
  IonCol,
  IonItem,
  IonIcon,
  IonTitle,
  IonAlert,
} from "@ionic/react";
import React, { useCallback, useEffect, useState } from "react";
import "./Home.scss";
import FileBox from "../../components/FileBox/FileBox";
import Toolbar from "../../components/ToolBar/Toolbar";
import { File as CustomFile } from "../../store/types";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import * as actions from "../../store/actions/index";
import FolderBox from "../../components/FolderBox/FolderBox";
import { returnUpBackOutline, trashOutline } from "ionicons/icons";
import CustomSpinner from "../../components/CustomSpinner/CustomSpinner";

const Home: React.FC = () => {

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

  const dispatch = useDispatch();

  const [showAlert, setShowAlert] = useState(false);

  const currentPath = useSelector(
    (state: RootState) => state.FolderReducer.currentPath
  );

  const files: CustomFile[] = useSelector((state: RootState) => {
    return state.FileReducer.files;
  });

  const folders: CustomFile[] = useSelector((state: RootState) => {
    return state.FolderReducer.folders;
  });

  const changeFolder = (path: string) => dispatch(actions.changeFolder(path));

  const onGetFiles = useCallback(
    (path) => dispatch(actions.recoverFiles(path)),
    [dispatch]
  );
  const recoverError = useSelector(
    (state: RootState) => state.FileReducer.recoverError
  );

  const removeFile = (name: string) => dispatch(actions.removeFile(name));
  const removeError = useSelector(
    (state: RootState) => state.FileReducer.removeError
  );

  const removeFolder = (name: string) => dispatch(actions.removeFolder(name));
  //const removeFolderError = useSelector(
  //  (state: RootState) => state.FolderReducer.removeError
  //);

  useEffect(() => {
    onGetFiles(currentPath);
  }, [currentPath, onGetFiles]);

  const handleRemoveFolder = (path: string) => {
    //Recuperamos todos los ficheros contenidos en la carpeta y lo borramos
    const removeFiles = files.filter(file => file.key.startsWith(path.substring(0, path.length-8)));
    removeFiles.forEach(file => removeFile(file.key));
    //Eliminamos carpeta
    removeFolder(path);
    //Volvemos a la carpeta padre despues de borrarla
    changeFolder(goBackPath(currentPath));
  };

  const downloading = useSelector(
    (state: RootState) => state.FileReducer.downloading
  );

  return (
    <IonPage>
      <Toolbar />
      <IonContent className="my-custom-content">
        {
        //Mostrar Spinner mientras se descargan los ficheros
        downloading ? (
          <CustomSpinner />
        ) : (
          <React.Fragment>
            {
            //En caso de estar dentro de una carpeta, mostrar barra de retroceder, borrar y ver carpeta
            currentPath !== "" ? (
              <React.Fragment>
                <IonAlert
                  isOpen={showAlert}
                  onDidDismiss={() => setShowAlert(false)}
                  cssClass="my-custom-class"
                  header={"¿Quieres borrar todo?"}
                  subHeader={"NO BORRAR SI HAY OTRAS CARPETAS DENTRO"}
                  message={"¿Deseas borrar la carpeta y todo su contenido?"}
                  buttons={["Cancelar",
                    {
                      text: "Aceptar",
                      role: "accept",
                      handler: () => {
                        handleRemoveFolder(currentPath + "/default");
                      },
                    },
                  ]}
                />
                <IonGrid>
                  <IonRow className="ion-text-center">
                    <IonCol size="2">
                      <IonItem
                        lines="none"
                        button
                        onClick={(e) => changeFolder(goBackPath(currentPath))}
                      >
                        <IonIcon icon={returnUpBackOutline} />
                      </IonItem>
                    </IonCol>
                    <IonCol size="8">
                      <IonItem lines="none">
                        <IonTitle className="ion-text-center">
                          {currentPath.substring(1, currentPath.length)}
                        </IonTitle>
                      </IonItem>
                    </IonCol>
                    <IonCol size="2">
                      <IonItem
                        lines="none"
                        button
                        onClick={(e) => setShowAlert(true)}
                      >
                        <IonIcon icon={trashOutline} />
                      </IonItem>
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </React.Fragment>
            ) : null}
            
            {recoverError ? <span>{recoverError.message}</span> : null}

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
                />
              )
            }
            
          </React.Fragment>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Home;
