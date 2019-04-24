import { createStore } from "redux";

export const actions = {
  ADD: "ADD",
  SUBTRACT: "SUBTRACT"
};

const rootReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case actions.ADD:
      return { ...state, count: state.count + 1 };
    case actions.SUBTRACT:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

export const store = createStore(rootReducer);
