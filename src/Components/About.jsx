/* eslint-disable react/no-unescaped-entities */
import myImage from '../assets/images/me.webp';


export default function About() {
  return (
    <section className="about" id="About">
  <div className="about-img">
    <img
      loading="lazy"
      title="Personal Image of Abdullah T. Hosni"
      alt="Personal image of Abdullah T. Hosni"
      src={myImage}
    />
  </div>
  <div className="about-content">
    <h2 className="heading">
      About <span>Me</span>
    </h2>
    <h3>Frontend Developer</h3>
    <p>
      I am a Frontend Web Developer specializing in creating and managing
      websites and web applications that drive product success and enhance user
      experiences. Explore my work in the
       <a href="#Portfolio" title="View my projects">
         <span> Projects section </span> 
      </a>
      to see some of the projects I've been involved with. In addition to my
      project work, I also provide valuable insights into web development and
      programming aimed at supporting and educating the developer community.
      Feel free to connect with me or follow me on
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://www.linkedin.com/in/abdullah-t-hosni/"
        title="Follow me on LinkedIn"
      >
        <span> LinkedIn </span>
      </a>
      and
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://www.instagram.com/abdullah.t.hosni"
        title="Follow me on Instagram"
      >
        <span> Instagram </span>
      </a>
      for valuable content and updates.
    </p>
    <a
      href="#Portfolio"
      className="button button-dot"
      title="Read more about my projects"
    >
      Read More
    </a>
  </div>
</section>

  )
}
