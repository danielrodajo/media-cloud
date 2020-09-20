import React, { useRef, FormEvent, useState } from 'react';
import { IonButton, IonPage, IonContent, IonItem } from '@ionic/react';
import Toolbar from '../../components/ToolBar/Toolbar';
import * as actions from '../../store/actions/index';
import { RootState } from '../../store/store';
import { useSelector, useDispatch } from 'react-redux';


const Add: React.FC = () => {

    const dispatch = useDispatch();
    const uploadFile = (name: string, file: File) => dispatch(actions.uploadFile(name, file));
    const uploadError = useSelector((state: RootState) => state.FileReducer.uploadError);

    const fileInput = useRef(null);
    const [ file, setFile ] = useState<File | null>();

    const submit = (event: FormEvent<HTMLIonButtonElement>) => {
        event.preventDefault();
        const name = (file as File).name;   
        //Subir el fichero a S3
        uploadFile(name, file as File);
        //Vaciar campo despues de enviarlo
        //form.reset();
    }

    return (
        <IonPage>
            <Toolbar />
            <IonContent>
            {
                (uploadError) ? <p>{uploadError}</p> : null
            }
            <IonItem lines="inset">
            <input
                ref={fileInput}
                hidden
                type="file"
                id="fileinput"
                onChange = {(event) => {
                    console.log((event.nativeEvent.target as HTMLInputElement).files?.item(0))
                    setFile((event.nativeEvent.target as HTMLInputElement).files?.item(0))
                }}
            />
            <IonButton
                color="primary"
                onClick={() => {
                // @ts-ignore
                fileInput?.current?.click();
                }}>
                Image
            </IonButton>
            </IonItem>
            <IonItem>       
            <IonButton onClick={submit}>Subir</IonButton>
            </IonItem>
            </IonContent>
        </IonPage>
    );
}

export default Add;