import { createStore, applyMiddleware, compose, combineReducers, Store, AnyAction, CombinedState } from 'redux';
import thunk from 'redux-thunk';
import FileReducer from './reducers/FileReducer';
import AuthReducer from './reducers/AuthReducer';
import FolderReducer from './reducers/FolderReducer';
import NotificationReducer from './reducers/NotificationReducer';
import FriendReducer from './reducers/FriendReducer';
import ShareFileReducer from './reducers/ShareFileReducer';
import * as types from './actions/ActionTypes';
import { FileState, AuthState, FolderState, NotificationState, FriendsState, ShareFileState } from './types';

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const appReducer = combineReducers({
    FileReducer : FileReducer,
    AuthReducer : AuthReducer,
    FolderReducer: FolderReducer,
    NotificationReducer: NotificationReducer,
    FriendReducer: FriendReducer,
    ShareFileReducer: ShareFileReducer,
});

const rootReducer = (state: CombinedState<{ FileReducer: FileState; AuthReducer: AuthState; FolderReducer: FolderState; NotificationReducer: NotificationState; FriendReducer: FriendsState; ShareFileReducer: ShareFileState }> | undefined, action: AnyAction) => {
    if (action.type === types.AUTH_SIGNOUT) {
        state = undefined;
    }
    return appReducer(state, action);
}

//Configurar Store con el Plugin de Redux DevTools de Google Chrome
const composeEnhancers = (process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null) || compose;

export type RootState = ReturnType<typeof rootReducer>

export default function generateStore() {
    const store: Store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
    return store;
}
