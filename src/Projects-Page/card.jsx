import React from "react";
import "./Card.css"; // For styling

const Card = ({ id, image, title, description, techStack, link }) => {
  return (
    <div className={`main-card main-card-${id}`}>
      <div className="card">
        <div className={`card-image card-image-${id}`}>
          {/* <img src={`/assets/${image}`} alt={title} /> */}
          <img src={`${image}`} alt={title} />
        </div>
      </div>
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <p className="tech-stack">{techStack}</p>
        <a
          href={link}
          className="live-demo"
          target="_blank"
          rel="noopener noreferrer"
        >
          Live demo
        </a>
      </div>
    </div>
  );
};

export default Card;
