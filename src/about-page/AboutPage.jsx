import "./AboutPage.css";
import "../animation.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export function AboutPage() {
  // const observer = new IntersectionObserver((entries) => {
  //   entries.forEach((entry) => {
  //     console.log(entry);

  //     if (entry.isIntersecting) {
  //       // Add the 'show' class when the element is intersecting
  //       entry.target.classList.add("show");
  //     } else {
  //       // Remove the 'show' class when the element is not intersecting
  //       entry.target.classList.remove("show");
  //     }
  //   });
  // });

  // const hiddenElements = document.querySelectorAll(".hidden");
  // hiddenElements.forEach((el) => observer.observe(el));

  useEffect(() => {
    AOS.init({ duration: 1000 });
  });

  return (
    <div className="about-page">
      <h1>Adithyan Sreeni</h1>
      <div className="about-page-content " data-aos="fade-up">
        <div>
          <h2>ABOUT</h2>
          <img
            className="MyPortrait "
            alt="MyPortrait"
            src="https://res.cloudinary.com/dlypdh8sx/image/upload/v1736215269/MyPortrait_ublbax.png"
          ></img>
        </div>
        <p className="my-desc">
          <p>
            <p>Hiiee!!</p>
            <p>I'm Adithyan</p>
          </p>
          <p>
            I enjoy building apps and working on side projects. Over the years,
            I’ve been actively developing applications using Flutter and
            exploring the world of software engineering.
          </p>
          <p>
            Currently, I’m in my 2nd year pursuing a B.Tech in Computer Science
            and Engineering at the College of Engineering Chengannur.
          </p>
          <p style={{ fontWeight: "bold" }}>
            I love working with computers! 😊
          </p>
        </p>
      </div>
    </div>
  );
}
