import React from "react";
import { Card, CardText, CardBody, CardTitle, Col } from "reactstrap";

function ProjectCard(props) {
  console.log("props for card", props);
  return (
    <div>
      <Col sm="8">
        <Card body>
          <CardBody>
            <CardTitle>Project Name: {props.project.name}</CardTitle>
            <CardText>
              Project Description: {props.project.description}
            </CardText>
            <CardText>
              Completed: {props.project.completed === true ? "yes" : "no"}
            </CardText>
          </CardBody>
        </Card>
      </Col>
    </div>
  );
}

export default ProjectCard;
