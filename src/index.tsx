import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'
import { rootReducer } from './Redux/Reducers/rootReducer'
import { MapDispatchToProps } from './Redux/Store/index'
import App, { MapStateToProps } from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';

const store = createStore(rootReducer)
const CApp = connect(MapStateToProps, MapDispatchToProps)(App)

ReactDOM.render(
    <Provider store={store}>
        <CApp />
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
