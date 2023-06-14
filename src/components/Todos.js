import React from "react";
import { useSelector } from "react-redux";
import { todoSelector } from "../store/reducers/todosSlice";

const Todos = () => {
  // sd selector de lay data tu todos
  const todos = useSelector(todoSelector);
  return (
    <div className="todo-list">
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
