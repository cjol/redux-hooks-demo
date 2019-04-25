import { createStore, compose } from "redux";

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const rootReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "ADD":
      return { ...state, count: state.count + 1 };
    case "SUBTRACT":
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

export const store = createStore(rootReducer, composeEnhancers());
