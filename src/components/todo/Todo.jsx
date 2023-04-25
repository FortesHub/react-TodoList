import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";

import "./Todo.css";
import { toggleTodo, updateTodo, deleteTodo } from "../../redux/actions";

const Todo = ({ todo }) => {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(todo?.data);
  const onFormSubmit = (e) => {
    e.preventDefault();
    setEditing((prevState) => !prevState);
    dispatch(updateTodo(todo?._id, text));
  };
  const dispatch = useDispatch();
  return (
    <li
      className="task"
      onClick={() => dispatch(toggleTodo(todo?._id))}
      style={{
        textDecoration: todo?.done ? "line-through 4px" : "",
        color: todo?.done ? "#ff0000" : "#000000",
      }}
      data-testid="todo-test"
    >
      <span style={{ display: editing ? "none" : "" }}>{todo?.data}</span>
      <form
        style={{ display: editing ? "inline" : "none" }}
        onSubmit={onFormSubmit}
      >
        <input
          className="editTodo"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </form>
      <button 
      className="icon"
       title="Delete"
       onClick={() => dispatch(deleteTodo(todo?._id))}
       >
        <i className="fa fa-trash"></i>
      </button>
      <button
        className="icon"
        title="Edit"
        onClick={() => setEditing((prevState) => !prevState)}
      >
        <i className="fa fa-thin fa-pen-to-square"></i>
      </button>
    </li>
  );
};

export default Todo;
