import React from 'react';
import './CustomLoadingPage.scss';
import CustomAnimation from '../CustomAnimation';
import filesAnimation from '../../Animations/documentsanimation.json';
import searchFilesAnimation from '../../Animations/searchanimation.json';
import searchFriendsAnimation from '../../Animations/searchfriendsanimation.json';

export interface CustomLoadingPageProps {
    type: LoadingType
}
 
const CustomLoadingPage: React.SFC<CustomLoadingPageProps> = props => {

    let loader = null;

    switch (props.type) {
        case LoadingType.Files: loader = <CustomAnimation json={filesAnimation} loop={true}/>; break;
        case LoadingType.SearchFiles: loader = <CustomAnimation json={searchFilesAnimation} loop={true}/>; break;
        case LoadingType.SearchFriends: loader = <CustomAnimation json={searchFriendsAnimation} loop={true}/>; break;
    }

    return ( 
        <React.Fragment>
            <div className="size-page-animation">
                {loader}
            </div>      
        </React.Fragment>
     );
}
 
export default CustomLoadingPage;

export enum LoadingType {
    Friends,
    Files,
    SearchFiles,
    SearchFriends,
}