import { createStore } from "redux";

const counterReducer = (state = { counter: 0 }, action) => {
  switch (action.type) {
    case "inc":
      return { counter: state.counter + 1 };
    case "dec":
      return { counter: state.counter - 1 };
    case "addBy":
      return { counter: state.counter + action.payload };
    default:
      return state;
  }
};

const store = createStore(counterReducer);

export default store;
