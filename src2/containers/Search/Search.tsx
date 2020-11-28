import React, { useState, useEffect, useCallback } from 'react';
import { IonPage, IonContent, IonText } from '@ionic/react';
import ToolbarSearch from '../../components/ToolBarSearch/ToolBarSearch';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import './Search.scss';
import FileBox from '../../components/FileBox/FileBox';
import * as actions from "../../store/actions/index";
import { File as CustomFile } from "../../store/types";
import CustomLoadingPage, { LoadingType } from '../../components/CustomLoadingPage/CustomLoadingPage';
import CustomAnimation from '../../components/CustomAnimation';
import noFileFoundAnimation from '../../Animations/nofilefound.json'
import startSearchAnimation from '../../Animations/startsearchanimation.json'
import MessageErrorToast from '../../components/MessageErrorToast/MessageErrorToast';

const Search: React.FC = () => {
    const dispatch = useDispatch();
    const user = useSelector((state: RootState) => state.AuthReducer.user);
    const [searchText, setSearchText] = useState("");

    const files: CustomFile[] = useSelector((state: RootState) => {
        return state.FileReducer.filterFiles;
    });

    const onRecoverFilesByName = useCallback((userId: String, name: string) => dispatch(actions.recoverFilesByName(userId, name)), [dispatch]);
    const recoverFilterError = useSelector((state: RootState) => state.FileReducer.recoverFilterError);

    const downloading = useSelector(
        (state: RootState) => state.FileReducer.downloading
    );   
    const removeFile = (name: string) => dispatch(actions.removeFile(name));

    const removeError = useSelector(
        (state: RootState) => state.FileReducer.removeError
    );


    useEffect(() => {
        onRecoverFilesByName(user.identityId, searchText);
    }, [searchText, onRecoverFilesByName, user.identityId]);

    return (
        <IonPage>
            <MessageErrorToast message={removeError ? removeError.message : undefined}/>
            <MessageErrorToast message={recoverFilterError ? recoverFilterError.message : undefined}/>
            <ToolbarSearch result={setSearchText} placeholder="Búsqueda de ficheros"/>
            <IonContent className="my-custom-content">
            {
                downloading ? 
                    <CustomLoadingPage type={LoadingType.SearchFiles} />
                :              
                    searchText === "" ?
                        <div className="center-empty-search-div">
                            <CustomAnimation json={startSearchAnimation} loop={false}/>
                            <IonText className="format-text-notifications">Busca un fichero</IonText>
                        </div>
                    :
                        files.length > 0 ?
                            files!.map((file:any) => 
                                <FileBox
                                    key={file.key}
                                    file={file}
                                    remove={removeFile}
                                    isAbsolutePath={false}
                            />)  
                        :
                            <div className="center-empty-search-div">
                                <CustomAnimation json={noFileFoundAnimation} loop={false}/>
                                <IonText className="format-text-notifications">No existe ese fichero</IonText>
                            </div>         
            }
            </IonContent>
        </IonPage>
    );
}

export default Search;