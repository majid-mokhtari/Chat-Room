import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import AppContainer from './containers/AppContainer'
import configureStore from './store/store';

const store = configureStore();

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
