import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware, compose } from "redux"
import { rootReducer } from "../reducers"

const createStore = () => {
    const store = configureStore({
        reducer: rootReducer,
        });

    return store;
}

export {createStore};

