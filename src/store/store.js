  
import { createStore, compose } from "redux";
import { rootReducer } from "./rootReducer";

const composeEnhancers =
  (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const store = createStore(rootReducer, composeEnhancers());

// export const store = createStore(rootReducer);
