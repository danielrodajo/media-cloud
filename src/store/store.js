import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import FileReducer from './reducers/FileReducer';
import AuthReducer from './reducers/AuthReducer';
import * as types from './actions/ActionTypes';


const appReducer = combineReducers({
    FileReducer : FileReducer,
    AuthReducer : AuthReducer,
});

const rootReducer = (state, action) => {
    if (action.type === types.AUTH_SIGNOUT) {
        state = undefined;
    }
    return appReducer(state, action);
}

//Configurar Store con el Plugin de Redux DevTools de Google Chrome
const composeEnhancers = (process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null) || compose;


export default function generateStore() {
    const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
    return store;
}
