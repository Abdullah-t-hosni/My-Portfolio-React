

export default function Services() {
  return (
    <section className="services" id="Services">
  <h2 className="heading">
    My<span>Services</span>
  </h2>
  <div className="services-container">
    <div className="services-box">
      <i className="fa-solid fa-code" aria-hidden="true" />
      <h3>Web Development</h3>
      <p>
        I offer development of user-friendly and accessible interfaces that work
        seamlessly across different browsers. I ensure efficient and
        high-quality code that meets your specific needs and enhances user
        experience.
      </p>
      <a
        href="#Portfolio"
        className="button button-dot"
        title="View my web development projects"
      >
        Read More
      </a>
    </div>
    <div className="services-box">
      <i className="fa-solid fa-mobile-screen-button" aria-hidden="true" />
      <h3>Responsive Web Design</h3>
      <p>
        I design responsive websites that adapt seamlessly to various devices,
        including desktops, tablets, and smartphones. This ensures an optimal
        user experience across all platforms and screen sizes.
      </p>
      <a
        href="#Portfolio"
        className="button button-dot"
        title="View my responsive web design projects"
      >
        Read More
      </a>
    </div>
    <div className="services-box">
      <i className="fa-solid fa-computer" aria-hidden="true" />
      <h3>IT Support</h3>
      <p>
        I provide comprehensive IT support services, including troubleshooting
        software issues, configuring new software, setting up networks, and
        upgrading your existing infrastructure to ensure smooth operations.
      </p>
      <a
        href="#"
        className="button button-dot"
        title="Contact me for IT support"
      >
        Read More
      </a>
    </div>
  </div>
</section>

  )
}
