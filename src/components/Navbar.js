import React from "react";
import { useSelector } from "react-redux";
import { todoSelector } from "../store/reducers/todosSlice";

const Navbar = () => {
  const todos = useSelector(todoSelector);
  return (
    <div className="navbar">
      <h1>My Redux App Todos</h1>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Total todos: {todos.length}</li>
      </ul>
    </div>
  );
};

export default Navbar;
