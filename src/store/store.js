import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import fileRetrieverReducer from './reducers/FileRetriever';

const rootReducer = combineReducers({
    fileRetriever : fileRetrieverReducer
});

//Configurar Store con el Plugin de Redux DevTools de Google Chrome
const composeEnhancers = (process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null) || compose;


export default function generateStore() {
    const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

    return store;
}
