import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { persistStore } from "redux-persist";
import RootReducer from "../Reducers/RootReducer";
import { composeWithDevTools } from "redux-devtools-extension";

// if (process.env.NODE_ENV === "development") {
//   middleware.push(logger);
// }

export const store = createStore(
  RootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export const persistor = persistStore(store);
