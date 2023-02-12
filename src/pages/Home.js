import React, { useState } from "react";
import "../assets/homepage.css";
import project1Img from "../assets/Payback-Plan.png";
import project2Img from "../assets/Social-Media-Backend.png";

const projects = [
  {
    id: 1,
    title: "Payback Plan",
    description:
      "Payback plan is a simple react web app I created to track expenses visually to assist with budgeting.",
    imgUrl: project1Img,
    githubLink: "https://github.com/noellerjd/Payback-Plan",
  },
  {
    id: 2,
    title: "Project 2",
    description: "This is the description for Project 2",
    imgUrl: project2Img,
    githubLink: "https://github.com/yourusername/project2",
  },
];

export default function Homepage() {
  const [currentProject, setCurrentProject] = useState(0);

  const displayPreviousProject = () => {
    if (currentProject === 0) {
      setCurrentProject(projects.length - 1);
    } else {
      setCurrentProject(currentProject - 1);
    }
  };

  const displayNextProject = () => {
    if (currentProject === projects.length - 1) {
      setCurrentProject(0);
    } else {
      setCurrentProject(currentProject + 1);
    }
  };

  const handleKeyDown = (event) => {
    if (event.keyCode === 37) {
      // Left arrow
      displayPreviousProject();
    } else if (event.keyCode === 39) {
      // Right arrow
      displayNextProject();
    }
  };

  document.addEventListener("keydown", handleKeyDown);

  return (
    <div className="homepage">
      <h1 className="title">
        Welcome to <span>Code</span>Noeller
      </h1>
      <p className="description">
        Here's a showcase of some of the projects I've worked on in the past,
        use the arrow buttons on the side or arrow keys to navigate!
      </p>
      <div className="projects-container">
        <div className="project" key={projects[currentProject].id}>
          <a
            href={projects[currentProject].githubLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={projects[currentProject].imgUrl}
              alt={projects[currentProject].title}
            />
          </a>
          <h2>{projects[currentProject].title}</h2>
          <p>{projects[currentProject].description}</p>
        </div>
      </div>
      <div className="arrow-container">
        <div className="arrow" onClick={displayPreviousProject}>
          &#8249;
        </div>
        <div className="arrow" onClick={displayNextProject}>
          &#8250;
        </div>
      </div>
    </div>
  );
}
