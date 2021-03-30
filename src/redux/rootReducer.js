import { combineReducers } from "redux";
import { textReducer } from "./textReducer";
import { themeReducer } from "./themeReducer";

export const rootReducer = combineReducers({
    theme: themeReducer,
    text: textReducer
})