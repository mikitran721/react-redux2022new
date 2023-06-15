import { createSlice, nanoid } from "@reduxjs/toolkit";
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
  /* vua la Khoi tao action + Action vua la reducer 
  - reducer ko sd truc tiep cai j co tinh ngau nhien; nen khi them moi can khau chuan bi data di kem
  */
  reducers: {
    addTodo: {
      reducer(state, action) {
        state.allTodos.unshift(action.payload);
      },
      prepare(title) {
        console.log(title);
        return {
          payload: {
            id: nanoid(),
            title,
            completed: false,
          },
        };
      },
    },
    /*  addTodo1: (state, action) => {
      state.allTodos.unshift({
        id: nanoid(),
        title: action.payload,
        completed: false,
      });
    }, */
    markCompleted(state, action) {
      const todoId = action.payload;
      state.allTodos.map((todo) => {
        if (todo.id === todoId) {
          todo.completed = !todo.completed;
        }
        return todo; //de ko chay tiep vong lap
      });
    },
    deleteTodo(state, action) {
      const todoId = action.payload;
      state.allTodos = state.allTodos.filter((todo) => todo.id !== todoId);
    },
  },
});

// tao reducer cua todo
const todoReducer = todosSlice.reducer;

// selector of todos: tra lai d/s todos
export const todoSelector = (state) => state.todoReducer.allTodos;

/* Xuat cac funtion de User tuong tac
Export actions
*/
export const { addTodo, markCompleted, deleteTodo } = todosSlice.actions;

export default todoReducer;
