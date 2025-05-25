import { Intro } from "./Intro-Page/Intro";
import { Monuments } from "./Monuments-page/Monuments";
import "./style.css";
import ProjectPage from "./Projects-Page/ProjectsPage";
import { AboutPage } from "./about-page/AboutPage";
import { Footer } from "./Footer/Footer";
import { ShootingStars } from "./Intro-Page/shooting-stars";
import { StarsBackground } from "./Intro-Page/stars-background";
// import { SignupFormDemo } from "./contact-me/contact";


const projects = [
  {
    id: 1,
    image:
      "https://res.cloudinary.com/dlypdh8sx/image/upload/v1736202156/weather-app_ncva69.png",
    title: "Weather App",
    description:
      "A simple app that shows the weather at the current location of the user.",
    techStack: "Flutter - Weather API",
    link: "https://weather-app-adithyan.netlify.app/",
  },
  {
    id: 2,
    image:
      "https://res.cloudinary.com/dlypdh8sx/image/upload/v1736202157/notes-app_v0w2ik.png",
    title: "Notes App",
    description: "A silly app that allows you to add and delete notes.",
    techStack: "Flutter - Firebase",
    link: "https://notes-app-adithyan.netlify.app/",
  },
  {
    id: 3,
    image:
      "https://res.cloudinary.com/dlypdh8sx/image/upload/v1736202156/auth-demo_mnj82j.png",
    title: "Auth Demo",
    description: "An app to demo authentication features.",
    techStack: "Flutter - Firebase Auth",
    link: "https://auth-demo-adithyan.netlify.app/",
  },
  {
    id: 4,
    image:
      "https://res.cloudinary.com/dlypdh8sx/image/upload/v1736202146/facts-app_oueiey.png",
    title: "Facts App",
    description: "A web app that allows users to share a fact.",
    techStack: "React - Supabase",
    link: "https://today-i-learned-adithyan.netlify.app/",
  },
];

function App() {
  return (
    <>
      {/* <h1>hii</h1> */}
      <StarsBackground />
      <ShootingStars />
      <Intro></Intro>
      <Monuments></Monuments>
      <ProjectPage projects={projects}></ProjectPage>
      <AboutPage />
      {/* <SignupFormDemo /> */}
      <Footer />
    </>
  );
}

export default App;
