import React, { useState } from "react";
import { addTodo } from "../store/reducers/todosSlice";
import { useDispatch } from "react-redux";

const TodoForm = () => {
  const [title, setTile] = useState("");

  const changeTitle = (e) => {
    setTile(e.target.value);
  };

  const dispatch = useDispatch(); //khoi tao useDispatch

  const addSingleTodo = (e) => {
    e.preventDefault();
    // console.log(title);
    if (title !== "") {
      dispatch(addTodo(title));
      setTile("");
    }
  };

  return (
    <div>
      <form onSubmit={addSingleTodo}>
        <input required type="text" value={title} onChange={changeTitle} />
        <input type="submit" value="Add" />
      </form>
    </div>
  );
};

export default TodoForm;
