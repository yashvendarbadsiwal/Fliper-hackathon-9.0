import { applyMiddleware, combineReducers, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { initialState, Reducer } from "./reducer";

export const configureStore = () =>{
    const store = createStore(
        combineReducers({
            Reducer
        }),
        applyMiddleware(thunk, logger)
    )
    return store;
}