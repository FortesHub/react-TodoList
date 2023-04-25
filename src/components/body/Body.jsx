import CardBody from "../CardBody/CardBody";
import Image from 'react-bootstrap/Image';
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";

import "./Body.css";

function Body() {
  const [text, setText] = useState("");

  useEffect(() => {
    fetch("/data.json")
    .then((response) => response.json())
    .then((data) => setText(data.text));
  }, []);

  let navigate = useNavigate();

  function handleClick() {
    navigate("/todoPage");
  }
  return (
    <CardBody>
      <div className="body-card">
        <Image className="image" src="/images/todo.gif" alt="imageTodo"/>
        <p className="text">{text}</p> 
          <Button className="body-button" onClick={handleClick}>
            Try it...
          </Button>       
      </div>
    </CardBody>
  );
}

export default Body;
