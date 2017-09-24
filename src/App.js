import React, { Component } from 'react';
import AppContainer from './containers/AppContainer'
import './App.css'

//middleware
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk';
import {rootReducer} from './reducers'
const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);
const store = createStoreWithMiddleware(rootReducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}

export default App;
