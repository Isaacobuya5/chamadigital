import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";

// import redux thunk to handling asynchronous requests
import thunk from "redux-thunk";

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState, applyMiddleware(thunk));
}
