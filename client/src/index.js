import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { startGetNotes } from './actions/notesAction';
import { startGetCategory } from './actions/categoriesAction';
import 'bootstrap/dist/css/bootstrap.css'
const store = configureStore()

store.dispatch(startGetNotes())
store.dispatch(startGetCategory())

const jsx=<Provider store={store}>
    <App/>
</Provider>

ReactDOM.render(jsx, document.getElementById('root'));
