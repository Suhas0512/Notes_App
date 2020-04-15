import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import notesReducer from "../reducer/notesReducer"
import categoryReducer from "../reducer/categoriesReducer"
import userReducer from "../reducer/userReducer"
const configureStore=()=>{
    const store=createStore(combineReducers({
        notes:notesReducer,
        categories:categoryReducer,
        user:userReducer
    }),applyMiddleware(thunk))
    return store
}

export default configureStore