import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  todoSelector,
  markCompleted,
  deleteTodo,
} from "../store/reducers/todosSlice";
import TodoForm from "./TodoForm";

const Todos = () => {
  // sd selector de lay data tu todos
  const todos = useSelector(todoSelector);
  const dispatch = useDispatch();

  const toggleTodoCompleted = (id) => {
    dispatch(markCompleted(id));
  };

  const deleteSingleTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div className="todo-list">
      <TodoForm />
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className={todo.completed ? "completed" : ""}>
            {todo.title}

            <input
              type="checkbox"
              checked={todo.completed}
              onChange={toggleTodoCompleted.bind(this, todo.id)}
            />
            <button onClick={deleteSingleTodo.bind(this, todo.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
