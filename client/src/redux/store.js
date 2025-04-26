import { configureStore } from "@reduxjs/toolkit";
import reducers from "./reducers/reducers";
import logger from "redux-logger";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage"; 

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user"], 
};

const persistedReducer = persistReducer(persistConfig, reducers);

// Tạo store
const store = configureStore({
  reducer: persistedReducer, 
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, 
    }).concat(logger),
});

const persistor = persistStore(store);

export { store, persistor };
