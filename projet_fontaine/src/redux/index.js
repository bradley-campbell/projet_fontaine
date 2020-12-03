import viewReducer from "./reducers/viewReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  viewState: viewReducer,
});

export default allReducers;
