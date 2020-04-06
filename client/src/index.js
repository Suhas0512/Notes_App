import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { startGetNotes } from './actions/notesAction';
import { startGetCategories } from './actions/categoriesAction';
const store = configureStore()

store.dispatch(startGetNotes())
store.dispatch(startGetCategories())

const jsx=<Provider store={store}>
    <App/>
</Provider>

ReactDOM.render(jsx, document.getElementById('root'));
