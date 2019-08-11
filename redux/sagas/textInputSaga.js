import { put, take, fork } from "redux-saga/effects";
import types from "../types";

// ****************
// WORKERS
// ****************

function* workerTextChanged(action) {
  // {type: "text_changed", payload: "-_-"}
  try {
    yield put({ type: types.TEXT_CHANGED_SUCCESS, text: action.payload });
  } catch (e) {
    console.log("Error", e);
  }
}

// ****************
// WATCHERS
// ****************

export function* watcherTextChanged() {
  while (true) {
    const action = yield take(types.TEXT_CHANGED);
    yield fork(workerTextChanged, action);
  }
}
