import React, { useState, useEffect, useCallback } from 'react';
import { IonPage, IonContent } from '@ionic/react';
import ToolbarSearch from '../../components/ToolBarSearch/ToolBarSearch';
import CustomSpinner from '../../components/CustomSpinner/CustomSpinner';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import './Search.scss';
import FileBox from '../../components/FileBox/FileBox';
import * as actions from "../../store/actions/index";
import { File as CustomFile } from "../../store/types";

const Search: React.FC = () => {
    const dispatch = useDispatch();
    const user = useSelector((state: RootState) => state.AuthReducer.user);
    const [searchText, setSearchText] = useState("");

    const onRecoverFilesByName = useCallback((userId: String, name: string) => dispatch(actions.recoverFilesByName(userId, name)), [dispatch]);

    const downloading = useSelector(
        (state: RootState) => state.FileReducer.downloading
    );   

    const files: CustomFile[] = useSelector((state: RootState) => {
        return state.FileReducer.filterFiles;
    });
    const removeFile = (name: string) => dispatch(actions.removeFile(name));

    const removeError = useSelector(
        (state: RootState) => state.FileReducer.removeError
    );


    useEffect(() => {
        onRecoverFilesByName(user.identityId, searchText);
    }, [searchText, onRecoverFilesByName, user.identityId]);

    return (
        <IonPage>
            <ToolbarSearch result={setSearchText} placeholder="Búsqueda de ficheros"/>
                <IonContent className="my-custom-content">
            {
                downloading ? 
                    <CustomSpinner /> 
                :              
                files!.map((file:any) => 
                <FileBox
                    key={file.key}
                    file={file}
                    remove={removeFile}
                    removeError={removeError}
              />)           
            }
            </IonContent>
        </IonPage>
    );
}

export default Search;