// ProjectDetail.tsx
import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { useParams } from "react-router-dom";
import projects from "../data/projects";
import Image from "react-bootstrap/Image";
import { Project } from "../data/projects";

interface PictureCarouselProps {
  project: Project;
}

function PictureCarousel({ project }: PictureCarouselProps) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {project.images.map((imageName, index) => (
        <Carousel.Item key={index}>
          <img src={imageName} alt={project.title} />
          <Carousel.Caption>
            <h3>{project.imageDesc[index]}</h3>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

function ProjectDetail() {
  const { id } = useParams<{ id?: string }>(); // Ensure id can be undefined

  const projectIndex = id ? parseInt(id, 10) : -1; // Convert id safely
  const project = projects[projectIndex];

  if (!project) {
    return <div className="text-center text-red-500">Project not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
      <p className="text-lg mb-4">{project.content}</p>
      <PictureCarousel project={project} />
    </div>
  );

  // "<div className="container mx-auto px-4 py-8">
  //   <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
  //   <p className="text-lg mb-4">{project.content}</p>
  //   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
  //     {project.images.map((image, index) => (
  //       <img
  //         key={index}
  //         src={image}
  //         alt={`${project.title} ${index}`}
  //         className="rounded-lg shadow-md"
  //       />
  //     ))}
  //   </div>
  // </div>"
}

export default ProjectDetail;
