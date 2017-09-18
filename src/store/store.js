import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import {rootReducer} from './../reducers'

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

export default function configureStore(initialState) {
  return createStoreWithMiddleware(
    rootReducer, /* preloadedState, */
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
}
