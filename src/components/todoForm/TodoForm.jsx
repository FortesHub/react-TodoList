import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import  addNewTodo  from "../../redux/actions"
import { useDispatch } from "react-redux";

import Header from "../header/Header";
import Footer from "../footer/Footer";
import TodoList from "../todoList/TodoList";
// import { AddNewTodo }  from "../redux/actions"

import "./TodoForm.css";

function TodoForm() {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const onFormSubmit = (e) => {
    e.preventDefault();

  
    dispatch(addNewTodo(text));

    setText('');
  };

  const onInputChange = (e) => {
    setText(e.target.value);
  };
  return (
    <div>
      <Header />
      <Card>
        <div className="body-card">
          <Form className="card-form" onSubmit={onFormSubmit}>
            <input
              className="card-input"
              placeholder="Enter new todo.."
              onChange={onInputChange}
              value={text}
            />
          </Form>
          <TodoList/>
        </div>
      </Card>
      <Footer />
    </div>
  );
}

export default TodoForm;
