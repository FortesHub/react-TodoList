import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

import "./Body.css";


function Body() {
  let navigate = useNavigate();

  function handleClick(){
    navigate("/todo");
  } 
  return (
    <Card>
      <div className="body-card">
        <Card.Img src="https://carolynnyoehome.files.wordpress.com/2021/09/haf02-7.gif" />
        <Card.Body>
          <Card.Text>
            TodoList is a term commonly used in software development to describe
            a list of tasks or items to be completed. It is often used in
            applications or programs that involve task or activity organization,
            where the user can create, manage, and mark items as completed. In
            other words, a TodoList is a list of things to do, a list of tasks,
            or a list of to-dos. It is a time management tool that helps to
            organize and prioritize activities to be done within a given time
            period. The idea is that the user can list all the tasks to be
            completed, so they can keep track of progress and focus on
            completing all the tasks on the list.
          </Card.Text>
          <Button className="body-button" onClick={handleClick}>TODO LIST</Button>
        </Card.Body>
      </div>
    </Card>
  );
}

export default Body;
