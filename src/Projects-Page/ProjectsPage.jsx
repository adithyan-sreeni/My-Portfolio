import "./Projects-Page.css";
import "../animation.css";
import Card from "./card";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function ProjectPage({ projects }) {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div className="projects-page">
      <h1>PROJECTS</h1>
      <div className="proj-header" data-aos="fade-right">
        {/* header */}
        <img src="/assets/guy-with-laptop.png"></img>
        <h2>PROJECTS</h2>
        {/* content - Projects flex Box */}
        <div className="projects-flexBox">
          {projects.map((project, index) => (
            <Card key={index} {...project} />
          ))}
        </div>
      </div>
      <div className="github-btn-flex">
        <div className="moving-border-container">
          <div className="moving-border"></div>
          <a
            className="button github-button"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/adithyan-sreeni"
          >
            <i className="fab fa-github"></i> View All on GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
export default ProjectPage;
