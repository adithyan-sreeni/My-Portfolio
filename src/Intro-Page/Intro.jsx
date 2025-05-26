export function Intro() {
  const scrollTo150vh = () => {
    window.scrollTo({
      top: window.innerHeight * 1.53, // Scrolls to 153% of the dynamic viewport height
      behavior: "smooth", // Adds smooth scrolling behavior
    });
  };

  return (
    <>
      <div className="intro-page">
        <img
          className="vector-man float"
          src="https://res.cloudinary.com/dlypdh8sx/image/upload/v1736215287/vectorMan_wczy1o.png"
          alt="vector man"
        />
        <div className="intro-content ">
          <p className="intro-text im float3">I'm</p>
          <p className="intro-text intro-text-name float">
            Adithyan Valayil Sreeni
          </p>
          <p className="intro-text intro-text-desc float4">
            I make random things, mostly using Flutter
          </p>
          <a
            href="https://github.com/adithyan-sreeni"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="socials float2"
              src="/assets/github.png"
              alt="GitHub logo"
            />
          </a>

          <a
            href="https://www.linkedin.com/in/adithyan-v-sreeni"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="socials float2"
              src="/assets/Linkdin.png"
              alt="LinkedIn logo"
            />
          </a>
        </div>
        {/* <a
          onClick={scrollTo150vh}
          class="scroll-down-indicator "
          href="#projects"
        >
          Scroll Down
        </a> */}
      </div>
      <a
        onClick={scrollTo150vh}
        class="scroll-down-indicator "
        href="#projects"
      >
        <span class="float">Scroll Down</span>
      </a>
    </>
  );
  //make flex .. one item will be the avatar and the next ite will be the texts
}
