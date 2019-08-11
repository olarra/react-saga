import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { sagaMonitor } from "./sagas/monitor";
import reducers from "./reducer"; // Our Reducers
import { rootSaga } from "./sagas/sagaConfig"; // Our Sagas

const middleWare = [];

// Setup Redux-Saga
const sagaMiddleware = createSagaMiddleware({ sagaMonitor });
middleWare.push(sagaMiddleware);

const store = createStore(
  reducers,
  {},
  compose(applyMiddleware(...middleWare))
);

//  Initiate the root saga.
sagaMiddleware.run(rootSaga);

export default store;
