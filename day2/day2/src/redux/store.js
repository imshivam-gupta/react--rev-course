import { applyMiddleware, combineReducers, createStore } from "redux";
import counterReducer from "./reducers/counterReducer";
import { composeWithDevTools } from "@redux-devtools/extension";
import userReducer from "./reducers/userReducer";
// import logger from 'redux-logger';
import {thunk} from 'redux-thunk';

const custimMiddleware = (store) => (next) => (action) => {
    console.log('Middleware triggered', action);
    next(action);
}

// thunk middleware -> we will study it later

const rootReducer = combineReducers({
    counter: counterReducer,
    users: userReducer
})

const middlewares = [thunk, custimMiddleware];

const store = createStore(rootReducer,composeWithDevTools(
    applyMiddleware(...middlewares))
);

// Redux Thunk

export default store;