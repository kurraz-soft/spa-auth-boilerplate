import {createStore, compose, applyMiddleware, combineReducers} from 'redux';
import gameReducer from './reducers/gameReducer';
import authReducer from './reducers/authReducer';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const localState = localStorage.reduxState ? JSON.parse(localStorage.reduxState) : undefined;

const rootReducer = combineReducers({
    game: gameReducer,
    auth: authReducer,
});

const store = createStore(rootReducer, localState, composeEnhancers(applyMiddleware(thunk)));

/*store.subscribe(() => {
    localStorage.reduxState = JSON.stringify(store.getState());
});*/

export default store;