import React, { useRef, useState, ChangeEvent, useEffect } from 'react';
import { IonItem, IonModal, IonGrid, IonRow, IonCol, IonToast, IonText, IonAlert } from '@ionic/react';
import * as actions from '../../store/actions/index';
import { RootState } from '../../store/store';
import { useSelector, useDispatch } from 'react-redux';
import { cloudUploadOutline, folderOutline, cameraOutline } from 'ionicons/icons';
import './Add.scss';
import Popover from './PopoverUpload/PopoverUpload';
import UploadButton from '../../components/UploadButton/UploadButton';
import { usePhotoGallery } from '../../hooks/usePhotoGallery';
import { Storage } from 'aws-amplify';
import MessageErrorToast from '../../components/MessageErrorToast/MessageErrorToast';


interface props {
    showModal: boolean
    setShowModal: (value: boolean) => void
}

const Add: React.FC<props> = props => {

    const dispatch = useDispatch();

    const [showToast, setShowToast] = useState(false);
    const [showToast2, setShowToast2] = useState(false);
    const [showToast3, setShowToast3] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    //Agregamos Hook para tomar una foto y guardarla
    const { photo, setPhoto, takePhoto } = usePhotoGallery();

    const createFolder = (name: string) => dispatch(actions.createFolder(name));
    const createFolderError = useSelector((state: RootState) => state.FolderReducer.createFolderError);

    const uploadFile = (name: string, file: File) => dispatch(actions.uploadFile(name, file));
    const uploading = useSelector((state: RootState) => state.FileReducer.uploading);
    const success = useSelector((state: RootState) => state.FileReducer.uploadSuccess);
    const uploadError = useSelector((state: RootState) => state.FileReducer.uploadError);

    const loadedFile = useSelector((state: RootState) => state.FileReducer.loadedFile);
    const totalFile = useSelector((state: RootState) => state.FileReducer.totalFile);

    const fileInput = useRef(null);

    const currentPath = useSelector((state: RootState) => state.FolderReducer.currentPath);

     const checkIfFileExists = async (currentFile: any) => {
        const result = await Storage.list(((currentPath === "") ? currentFile.name : currentPath+"/"+currentFile.name), {level: 'protected'});
        return result.length !== 0;
    }

    const checkIfFolderExists = async (folderName: string) => {
        const result = await Storage.list(currentPath+"/"+folderName+"/default", {level: 'protected'});
        return result.length !== 0;
    }

    //Prepara la carpeta para crearla, ajustando la ruta completa y reseteando los valores 
    const submitFolder = async(folderName: string) => {
        if (await checkIfFolderExists(folderName)) {
            setShowToast2(true);
            return;
        }
        createFolder(currentPath+"/"+folderName);
        setShowAlert(false);
        props.setShowModal(false);
    }

    const submitFile = async(event: ChangeEvent<HTMLInputElement>, file:any) => {
        event.preventDefault();
        if (await checkIfFileExists(file)) {
            setShowToast(true);
            return;
        }
        const name = (file as File).name;   
        //Subir el fichero a S3
        uploadFile(((currentPath === "") ? name : currentPath+"/"+name), file as File);
        props.setShowModal(false);
    }

    const submitPhoto = async() => {
        if (await checkIfFileExists(photo)) {
            setShowToast(true);
            return;
        }
        const name = (photo as File).name;  
        //Subir el fichero a S3
        uploadFile(((currentPath === "") ? name : currentPath+"/"+name), photo as File);
        //Vaciar campo despues de enviarlo
        setPhoto(null);
        props.setShowModal(false);
    }

    useEffect(() => {
        if (photo) submitPhoto();
    }, [photo]);

    return (
        <React.Fragment>  
            <MessageErrorToast message={uploadError ? uploadError.message : undefined}/>
            <MessageErrorToast message={createFolderError ? createFolderError.message : undefined}/>
            <IonAlert
                isOpen={showAlert}
                onDidDismiss={() => setShowAlert(false)}
                cssClass="custom-alert-folder-name"
                header={"Nueva carpeta"}
                inputs={[
                    {
                      name: 'folderName',
                      type: 'text',
                      placeholder: 'Carpeta sin título',
                    }]}
                buttons={["Cancelar",
                    {
                    text: "Crear",
                    role: "accept",
                    
                    handler: (alertData) => {
                        if (alertData.folderName.length > 0)
                            submitFolder(alertData.folderName);
                        else
                            setShowToast3(true);
                    },
                    },
                ]}
            />
            <IonToast
                isOpen={showToast}
                onDidDismiss={() => setShowToast(false)}
                message="Ya existe un fichero con ese nombre en esta carpeta."
                duration={1500}
            /> 
            <IonToast
               isOpen={showToast2}
               onDidDismiss={() => setShowToast2(false)}
               message="Ya existe una carpeta con ese nombre en esta carpeta."
               duration={1500}
           />     
           <IonToast
               isOpen={showToast3}
               onDidDismiss={() => setShowToast3(false)}
               message="No ha introducido un nombre para la carpeta."
               duration={1500}
           />      
            <Popover 
                loadedFile = {loadedFile}
                totalFile = {totalFile}
                uploading = {uploading}
                success = {success}
                text = "Subiendo"
            />
            
            <input
                ref={fileInput}
                hidden
                type="file"
                id="fileinput"
                onChange = {(event) => {
                    submitFile(event, (event.nativeEvent.target as HTMLInputElement).files?.item(0));
                }}
            />

            <IonModal isOpen={props.showModal} cssClass="my-custom-modal-css" onDidDismiss={e => props.setShowModal(false)}>
                <IonItem style={{"width": "100%"}} className="ion-no-padding custom-add-title">
                    <IonText>Crear</IonText>
                </IonItem>
                <IonGrid className="ion-no-margin ion-text-center">
                    <IonRow>
                        <IonCol>
                            <UploadButton icon={cameraOutline} onClick={takePhoto}>
                                <br/>Foto
                            </UploadButton>
                        </IonCol>
                        <IonCol>
                            <UploadButton icon={folderOutline} onClick={() => {setShowAlert(true)}}>
                                <br/>Carpeta
                            </UploadButton>
                        </IonCol>
                        <IonCol>
                            <UploadButton icon={cloudUploadOutline} onClick={() => {
                                // @ts-ignore
                                fileInput?.current?.click();
                                }}>
                                <br/>Fichero
                            </UploadButton>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonModal>
        </React.Fragment>
    );
}

export default Add;