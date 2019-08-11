import types from "./types";
import { combineReducers } from "redux";

const INITIAL_STATE = {
  text: "hello :)"
};

const textReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.TEXT_CHANGED_SUCCESS:
      return { ...state, text: action.text };
    default:
      return state;
  }
};

export default combineReducers({
  // the keys here are going to be the property of state that we are producing.
  textReducer
});
