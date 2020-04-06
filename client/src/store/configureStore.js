import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import notesReducer from "../reducer/notesReducer"
import categoriesReducer from "../reducer/categoriesReducer"
const configureStore=()=>{
    const store=createStore(combineReducers({
        notes:notesReducer,
        categories:categoriesReducer
    }),applyMiddleware(thunk))
    return store
}

export default configureStore