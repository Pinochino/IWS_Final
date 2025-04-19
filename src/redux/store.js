import { configureStore } from "@reduxjs/toolkit";
import reducers from "./reducers/reducers";
// import {reduxThunk} from "redux-thunk";
import logger from "redux-logger";

const store = configureStore({
  reducer: reducers,
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(logger),
});
export default store;
