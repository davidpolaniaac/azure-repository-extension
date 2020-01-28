import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import { fetchMiddleware } from 'redux-recompose';
import ReduxThunk from 'redux-thunk';


const reducers = {
    form: reduxFormReducer,
};

const appReducer = combineReducers(reducers);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line
const store = createStore(
    appReducer,
    composeEnhancers(applyMiddleware(ReduxThunk, fetchMiddleware)),
);

export default store;