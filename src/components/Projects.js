import React, { useEffect, useState } from "react";
import axios from "axios";
import ProjectCard from "./ProjectCard";
import { Row } from "reactstrap";

export default function Project() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/projects")
      .then(res => {
        setProjects(res.data);
        console.log("projects", res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <Row>
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </Row>
    </div>
  );
}
