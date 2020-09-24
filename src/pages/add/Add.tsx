import React, { useRef, useState } from 'react';
import { IonItem, IonModal, IonGrid, IonRow, IonCol, IonIcon, IonText, IonInput } from '@ionic/react';
import * as actions from '../../store/actions/index';
import { RootState } from '../../store/store';
import { useSelector, useDispatch } from 'react-redux';
import { cloudUploadOutline, folderOutline, cameraOutline, checkmarkOutline, closeOutline } from 'ionicons/icons';
import './Add.scss';
import Popover from './PopoverUpload/PopoverUpload';
import UploadButton from '../../components/UploadButton/UploadButton';
import { usePhotoGallery } from '../../hooks/usePhotoGallery';
import DisplaySelectFile from '../../components/DisplaySelectFile/DisplaySelectFile';


interface props {
    showModal: boolean
    setShowModal: (value: boolean) => void
}

const Add: React.FC<props> = props => {

    const dispatch = useDispatch();

    //Agregamos Hook para tomar una foto y guardarla
    const { photo, setPhoto, takePhoto } = usePhotoGallery();
    const [ file, setFile ] = useState<File | null>();
    const [ creatingFolder,setCreatingFolder ] = useState(false);
    const [ folderName, setFolderName ] = useState("");

    const createFolder = (name: string) => dispatch(actions.createFolder(name));
    const createFolderError = useSelector((state: RootState) => state.FolderReducer.createFolderError);
    const creating = useSelector((state: RootState) => state.FolderReducer.creating);
    const successFolder = useSelector((state: RootState) => state.FolderReducer.createSuccess);

    const uploadFile = (name: string, file: File) => dispatch(actions.uploadFile(name, file));
    const uploadError = useSelector((state: RootState) => state.FileReducer.uploadError);
    const uploading = useSelector((state: RootState) => state.FileReducer.uploading);
    const success = useSelector((state: RootState) => state.FileReducer.uploadSuccess);

    const loadedFile = useSelector((state: RootState) => state.FileReducer.loadedFile);
    const totalFile = useSelector((state: RootState) => state.FileReducer.totalFile);

    const fileInput = useRef(null);

    const currentPath = useSelector((state: RootState) => state.FolderReducer.currentPath);


    const submitFolder = (event: React.MouseEvent<HTMLIonItemElement, MouseEvent>) => {
        event.preventDefault();
        createFolder(currentPath+"/"+folderName);
        setFolderName("");
        setCreatingFolder(false);
        props.setShowModal(false);
    }

    const submitFile = (event: React.MouseEvent<HTMLIonItemElement, MouseEvent>) => {
        event.preventDefault();
        const name = (file as File).name;   
        //Subir el fichero a S3
        uploadFile(currentPath+"/"+name, file as File);
        //Vaciar campo despues de enviarlo
        setFile(null);
        props.setShowModal(false);
    }

    const submitPhoto = (event: React.MouseEvent<HTMLIonItemElement, MouseEvent>) => {
        event.preventDefault(); 
        const name = (photo as File).name;  
        //Subir el fichero a S3
        uploadFile(currentPath+"/"+name, photo as File);
        //Vaciar campo despues de enviarlo
        setPhoto(null);
        props.setShowModal(false);
    }

    return (
        <React.Fragment>            
            <Popover 
                loadedFile = {loadedFile}
                totalFile = {totalFile}
                uploading = {uploading}
                success = {success}
            />
            
            <input
                ref={fileInput}
                hidden
                type="file"
                id="fileinput"
                onChange = {(event) => {
                    setFile((event.nativeEvent.target as HTMLInputElement).files?.item(0));
                }}
            />

            <IonModal isOpen={props.showModal} cssClass="my-custom-modal-css" onDidDismiss={e => props.setShowModal(false)}>
            {
                (uploadError) ? <p>{uploadError}</p> : null
            }
            <IonGrid className="ion-no-margin ion-text-center">
                <IonRow>
                    <IonCol>
                        <UploadButton icon={cameraOutline} onClick={takePhoto}>
                            <br/>Subir<br/>Foto
                        </UploadButton>
                    </IonCol>
                    <IonCol>
                        <UploadButton icon={folderOutline} onClick={() => {setCreatingFolder(true)}}>
                            <br/>Crear<br/>Carpeta
                        </UploadButton>
                    </IonCol>
                    <IonCol>
                        <UploadButton icon={cloudUploadOutline} onClick={() => {
                            // @ts-ignore
                            fileInput?.current?.click();
                            }}>
                            <br/>Subir<br/>Fichero
                        </UploadButton>
                    </IonCol>
                </IonRow>
            </IonGrid>
            {
                //En caso de seleccionar fichero, mostrar fila de confirmacion
                (file) ?
                <DisplaySelectFile file={file} submit={submitFile} reset={() => setFile(null)}/>        
                : null
            }
            {
                //En caso de hacer una foto, mostrar fila de confirmacion
                (photo) ?
                <DisplaySelectFile file={photo} submit={submitPhoto} reset={() => setPhoto(null)}/>
                : null
            }
            {
               (creatingFolder) ?             
                <IonGrid className="ion-no-margin ion-margin-start">
                    <IonRow>
                        <IonCol size="6">
                            <IonItem lines="none">
                                <IonInput value={folderName} placeholder="Nombre carpeta" onIonChange={e => setFolderName(e.detail.value!)}></IonInput>
                            </IonItem>       
                        </IonCol>
                        <IonCol>
                            <IonItem button onClick={submitFolder} className="ion-float-left" lines="none">
                                <IonIcon icon={checkmarkOutline} />
                            </IonItem>
                            <IonItem button onClick={() => setCreatingFolder(false)} className="ion-float-left" lines="none">
                                <IonIcon icon={closeOutline} />
                            </IonItem>
                        </IonCol>
                    </IonRow>
                </IonGrid>     
               : null
            }
            </IonModal>
        </React.Fragment>
    );
}

export default Add;