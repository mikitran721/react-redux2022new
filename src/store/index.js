import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./reducers/todosSlice";

// store
const store = configureStore({
  reducer: {
    todoReducer,
  },
});

export default store;
