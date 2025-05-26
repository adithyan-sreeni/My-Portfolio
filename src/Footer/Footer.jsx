import "./Footer.css";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Adds smooth scrolling behavior
    });
  };
  const scrollTo150vh = () => {
    window.scrollTo({
      top: window.innerHeight * 1.5, // Scrolls to 150% of the dynamic viewport height
      behavior: "smooth", // Adds smooth scrolling behavior
    });
  };
  const scrollUpSlightly = () => {
    window.scrollBy({
      top: -window.innerHeight * 0.21, // Scroll up by 21% of the dynamic viewport height
      behavior: "smooth", // Smooth scrolling effect
    });
  };

  return (
    <footer className="footer">
      <div className="footer-left">
        <ul>
          <li>
            <button onClick={scrollToTop} className="scroll-to-top">
              <i className="fas fa-home"></i> Scroll to Top
            </button>
          </li>
          <li>
            <button onClick={scrollTo150vh} className="scroll-to-top">
              <i className="fas fa-gamepad"></i> Projects
            </button>
          </li>
          <li>
            <button onClick={scrollUpSlightly} className="scroll-to-top">
              <i className="fas fa-user"></i> About me
            </button>
          </li>
        </ul>
      </div>
      <div className="footer-right">
        <a
          href="https://drive.google.com/file/d/1g1XvjFEp0o5RHDGHOFXYk3OUalP-OttP/view?usp=sharing"
          className="resume-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fas fa-file-alt"></i> View Resume
        </a>
        <div className="social-links">
          {/* <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a> */}
          <a
            href="https://github.com/adithyan-sreeni"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/adithyan-v-sreeni/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          {/* <a href="https://dev.to" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-dev"></i>
          </a> */}
        </div>
      </div>
    </footer>
  );
};
