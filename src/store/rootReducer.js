import { combineReducers } from "redux";
import { modalReducer } from "./modal/reducer";

export const rootReducer = combineReducers({
  Modal: modalReducer
})


