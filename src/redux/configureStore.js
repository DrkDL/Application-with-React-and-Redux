import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";

// the configureStore function has features of immutability and serializability checks by default
// and it also includes the redux-thunk middleware by default, which allows for async actions
const store = configureStore({
  reducer: rootReducer
});

export default store;
