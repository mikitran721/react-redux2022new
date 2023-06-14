import { createSlice } from "@reduxjs/toolkit";
const todosSlice = createSlice({
  name: "todos", //action
  initialState: {
    allTodos: [
      { id: 1, title: "delectus aut autem", completed: false },
      {
        id: 98,
        title:
          "debitis accusantium ut quo facilis nihil quis sapiente necessitatibus",
        completed: true,
      },
      {
        id: 103,
        title: "non sunt delectus illo nulla tenetur enim omnis",
        completed: false,
      },
      {
        id: 104,
        title: "miki new",
        completed: false,
      },
    ],
  },
});

// tao reducer cua todo
const todoReducer = todosSlice.reducer;

// selector of todos
export const todoSelector = (state) => state.todoReducer.allTodos;

export default todoReducer;
