import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { useState } from "react"

import Header from "../header/Header";
import Footer from "../footer/Footer";

import "./TodoForm.css";

function TodoForm() {
  const [text, setText] = useState("");

  function onFormSubmit(){

  }

  function onInputChange(e){
    setText(e.target.value);
  }
  return (
    <div>
      <Header />
      <Card>
        <div className="body-card">
          <Form className="card-form" onSubmit={onFormSubmit}>
            <input className="card-input" placeholder="Enter new todo.." onChange={onInputChange}/>
          </Form>
        </div>
      </Card>
      <Footer />
    </div>
  );
}

export default TodoForm;
