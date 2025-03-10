// Projects.tsx
import React from "react";
import { Link } from "react-router-dom";
import projects from "../data/projects";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import CardGroup from "react-bootstrap/CardGroup";
import { Project } from "../data/projects";

interface ProjectCardsProps {
  project: Project;
  index: number;
}

function ProjectCards({ project, index }: ProjectCardsProps) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={project.images[0]} />
      <Card.Body>
        <Card.Title>{project.title}</Card.Title>
        <Card.Text>{project.teaser}</Card.Text>
        <Button href={`/projects/${index}`} variant="primary">
          See More
        </Button>
      </Card.Body>
    </Card>
  );
}

function Projects() {
  return (
    <CardGroup>
      {projects.map((project, index) => (
        <ProjectCards project={project} index={index} />
      ))}
    </CardGroup>
  );
}

export default Projects;
