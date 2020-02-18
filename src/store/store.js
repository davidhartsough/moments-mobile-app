import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { persistReducer } from "redux-persist";
import { AsyncStorage } from "react-native";
import rootReducer from "./reducers";

const persistConfig = {
  key: "root",
  storage: AsyncStorage
  // blacklist: ['auth']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default createStore(persistedReducer, applyMiddleware(thunk));
