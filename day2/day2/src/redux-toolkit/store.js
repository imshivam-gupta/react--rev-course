import { applyMiddleware, combineReducers } from "redux";
import logger from 'redux-logger';
import {thunk} from 'redux-thunk';
import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counterSlice";
import userSlice from "./slices/userSlice";

const custimMiddleware = (store) => (next) => (action) => {
    console.log('Middleware triggered', action);
    next(action);
}

// thunk middleware -> we will study it later


const store = configureStore({
    reducer:{
        counter: counterSlice,
        users: userSlice
    },
    middleware: applyMiddleware[logger,thunk]
}
);

// Redux Thunk

export default store;