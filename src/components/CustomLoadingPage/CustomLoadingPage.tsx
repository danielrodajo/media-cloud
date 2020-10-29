import React from 'react';
import './CustomLoadingPage.scss';
import FilesAnimation from '../../Animations/FilesAnimation/FilesAnimation';
import SearchAnimation from '../../Animations/SearchAnimation/SearchAnimation';
import SearchFriendsAnimation from '../../Animations/SearchFriendsAnimation/SearchFriendsAnimation';

export interface CustomLoadingPageProps {
    type: LoadingType
}
 
const CustomLoadingPage: React.SFC<CustomLoadingPageProps> = props => {

    let loader = null;

    switch (props.type) {
        case LoadingType.Files: loader = <FilesAnimation />; break;
        case LoadingType.SearchFiles: loader = <SearchAnimation />; break;
        case LoadingType.SearchFriends: loader = <SearchFriendsAnimation />; break;
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