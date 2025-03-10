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

// return (
//   <div className="container mx-auto px-4 py-8">
//     <h1 className="text-2xl font-bold text-center mb-6">My Projects</h1>
//     <div className="grid sm: grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//       {projects.map((project, index) => (
//         <Link
//           key={index}
//           to={`/projects/${index}`}
//           className="block bg-white rounded-lg shadow-md hover:shadow-lg transition p-3"
//         >
//           {project.images.length > 0 && (
//             <img
//               src={project.images[0]}
//               alt={project.title}
//               className="w-full h-32 object-cover rounded-md"
//             />
//           )}
//           <h2 className="text-sm font-semibold mt-2 text-center">
//             {project.title}
//           </h2>
//         </Link>
//       ))}
//     </div>
//   </div>
// );

export default Projects;
