import React from "react";
import Card from "react-bootstrap/Card";
import "./CardBody.css";

function CardBody(props) {
  return( 
    <div className="container">
  <Card className="card">
    {props.children}
  </Card>
  </div>
  );
}
export default CardBody;
