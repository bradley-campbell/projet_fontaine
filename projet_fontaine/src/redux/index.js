import viewReducer from "./reducers/viewReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({ // Currently using combineReducers even though there is only one reducer (viewReducer) - may add more depending on future functionality so leaving as is
  viewState: viewReducer,
});

export default allReducers;
