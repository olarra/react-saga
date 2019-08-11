import { all, fork } from "redux-saga/effects";
import { watcherTextChanged } from "./textInputSaga";

export function* rootSaga() {
  yield all([fork(watcherTextChanged)]);
}
