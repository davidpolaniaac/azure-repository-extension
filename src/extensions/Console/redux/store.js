import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import { fetchMiddleware } from 'redux-recompose';
import ReduxThunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import repositories from './repositories/reducer';


export const history = createBrowserHistory();

const reducers = {
    form: reduxFormReducer,
    repositories,
};

const appReducer = combineReducers(reducers);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line
const store = createStore(
    connectRouter(history)(appReducer),
    composeEnhancers(applyMiddleware(routerMiddleware(history), ReduxThunk, fetchMiddleware)),
);

export default store;