import { createStore, applyMiddleware } from "redux";

//logger with deafault options

import logger from "redux-logger";

import reducer from "./reducer";

export default function configureStoree(initialState) {
  const store = createStore(reducer, initialState, applyMiddleware(logger));
  return store;
}