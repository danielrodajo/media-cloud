import React, { useRef, useState } from 'react';
import { IonItem, IonModal, IonGrid, IonRow, IonCol, IonIcon, IonText, IonLabel } from '@ionic/react';
import * as actions from '../../store/actions/index';
import { RootState } from '../../store/store';
import { useSelector, useDispatch } from 'react-redux';
import { cloudUploadOutline, folderOutline, cameraOutline, checkmarkOutline, closeOutline } from 'ionicons/icons';
import './Add.scss';
import Popover from './PopoverUpload/PopoverUpload';

interface props {
    showModal: boolean
    setShowModal: (value: boolean) => void
}

const Add: React.FC<props> = props => {

    const dispatch = useDispatch();
    const uploadFile = (name: string, file: File) => dispatch(actions.uploadFile(name, file));
    const uploadError = useSelector((state: RootState) => state.FileReducer.uploadError);
    const uploading = useSelector((state: RootState) => state.FileReducer.uploading);
    const success = useSelector((state: RootState) => state.FileReducer.uploadSuccess);

    const loadedFile = useSelector((state: RootState) => state.FileReducer.loadedFile);
    const totalFile = useSelector((state: RootState) => state.FileReducer.totalFile);

    const fileInput = useRef(null);
    const [ file, setFile ] = useState<File | null>();

    const submit = (event: React.MouseEvent<HTMLIonItemElement, MouseEvent>) => {
        event.preventDefault();
        const name = (file as File).name;   
        //Subir el fichero a S3
        uploadFile(name, file as File);
        //Vaciar campo despues de enviarlo
        setFile(null);
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
                        <IonItem button className="ion-text-center" lines="none">
                            <IonLabel>
                                <IonIcon size="large" icon={cameraOutline} />
                                <IonText><br/>Subir<br/>Foto</IonText>
                            </IonLabel>
                        </IonItem>
                    </IonCol>
                    <IonCol>
                        <IonItem button className="ion-text-center" lines="none">
                            <IonLabel>
                                <IonIcon size="large" icon={folderOutline} />
                                <IonText><br/>Crear<br/>Carpeta</IonText>
                            </IonLabel>
                        </IonItem>  
                    </IonCol>
                    <IonCol>
                        <IonItem button className="ion-text-center" onClick={() => {
                            // @ts-ignore
                            fileInput?.current?.click();
                            }} lines="none">
                            <IonLabel>
                                <IonIcon size="large" icon={cloudUploadOutline} />
                                <IonText><br/>Subir<br/>Fichero</IonText>
                            </IonLabel>
                        </IonItem>
                    </IonCol>
                </IonRow>
            </IonGrid>
            {
                //En caso de seleccionar fichero, mostrar fila de confirmacion
                (file) ?
                <IonGrid className="ion-no-margin ion-margin-start">
                    <IonRow>
                        <IonCol size="6">
                            <IonText className="fullheight xc">
                                {
                                    (file.name.length > 25) ? file.name.substring(0,22)+"..." : file.name
                                }
                            </IonText>
                        </IonCol>
                        <IonCol>
                            <IonItem button onClick={submit} className="ion-float-left" lines="none">
                                <IonIcon icon={checkmarkOutline} />
                            </IonItem>
                            <IonItem button onClick={e => setFile(null)} className="ion-float-left" lines="none">
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