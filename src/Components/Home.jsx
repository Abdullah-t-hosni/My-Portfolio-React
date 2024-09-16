/* eslint-disable react/no-unescaped-entities */
import { useEffect } from "react";
import Typed from "typed.js";
import myImage from "../assets/images/aboutwebp.webp";

export default function Home() {
  useEffect(() => {
    let typed;
    try {
      typed = new Typed(".multiple-text", {
        strings: ["Frontend Developer", "Web Developer"],
        typeSpeed: 70,
        backSpeed: 70,
        backDelay: 1000,
        loop: true,
      });
    } catch (error) {
      console.error("Typed.js initialization error:", error);
    }

    return () => {
      if (typed) typed.destroy();
    };
  }, []);

  const openResume = () => {
    window.open(
      "https://drive.google.com/file/d/138F4gV1cPCEqlSvfBEOOZw5M4nFhyHqp/view?usp=drive_link",
      "_blank",
      "noopener noreferrer"
    );
  };

  return ( 
    <section className="home" id="Home">

      <div className="home-content">
        <h3>Hi, It's Me</h3>
        <h1>Abd Ullah T. Hosni</h1>
        <h3>
          I'm a <span className="multiple-text" />
        </h3>
        <p>
          I am a passionate Frontend Web Developer with experience in creating
          dynamic and user-friendly websites. I am currently open to exciting
          job opportunities where I can leverage my skills and grow
          professionally. If you have a role that fits my expertise, feel free
          to reach out.
        </p>
        <div className="social-media">
          <a
            href="https://www.facebook.com/abdullah.t.hosni"
            title="Visit my Facebook profile"
            rel="noopener noreferrer"
            target="_blank"
            className="circle"
            aria-label="Facebook"
          >
            <i className="fab fa-facebook" />
            <i className="fab fa-facebook" />
          </a>
          <a
            href="https://github.com/Abdullah-t-hosni"
            title="Visit my GitHub profile"
            rel="noopener noreferrer"
            target="_blank"
            className="circle"
            aria-label="GitHub"
          >
            <i className="fab fa-github" />
            <i className="fab fa-github" />
          </a>
          <a
            href="https://www.instagram.com/abdullah.t.hosni"
            title="Visit my Instagram profile"
            rel="noopener noreferrer"
            target="_blank"
            className="circle"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram" />
            <i className="fab fa-instagram" />
          </a>
          <a
            href="https://www.linkedin.com/in/abdullah-t-hosni/"
            title="Visit my LinkedIn profile"
            rel="noopener noreferrer"
            target="_blank"
            className="circle"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin" />
            <i className="fab fa-linkedin" />
          </a>
        </div>
        <button
          className="button button-dot circle"
          onClick={openResume}
          aria-label="View my resume"
        >
          View Resume
        </button>
      </div>
      <div className="home-img">
        <img
          loading="lazy"
          title="Personal Image"
          alt="A personal image of Abdullah T. Hosni, a Frontend Web Developer"
          src={myImage}
        />
      </div>
    </section>
  );
}
