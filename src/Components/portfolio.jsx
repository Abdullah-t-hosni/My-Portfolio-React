import image1 from '../assets/images/1.webp';
import image7 from '../assets/images/7.webp';
import image6 from '../assets/images/6.webp';
import image2 from '../assets/images/2.webp';
import image4 from '../assets/images/4.webp';
import image3 from '../assets/images/3.webp';
import image5 from '../assets/images/5.webp';

export default function Portfolio() {
  return (
    <section className="portfolio" id="Portfolio">
      <h2 className="heading">Latest<span>Projects</span></h2>
      <div className="portfolio-container">
        <div className="portfolio-box">
          <img
            loading="lazy"
            title="E-commerce App"
            alt="Portfolio Image - E-commerce App"
            src={image1}
          />
          <div className="portfolio-layer">
            <h4>E-commerce App</h4>
            <p>Designed using Angular</p>
            <a
              href="https://ecommerce-app-psi-coral.vercel.app/home"
              title="View E-commerce App"
              rel="noopener noreferrer"
              target="_blank"
              ><i
                className="fa-solid fa-up-right-from-square"
                aria-hidden="true"
              ></i
            ></a>
          </div>
        </div>
        <div className="portfolio-box">
          <img
            loading="lazy"
            title="Coffee Website"
            alt="Portfolio Image - Coffee Website"
            src={image7}
          />
          <div className="portfolio-layer">
            <h4>Coffee Website</h4>
            <p>Designed using HTML, CSS, and JavaScript</p>
            <a
              href="https://abdullah-t-hosni.github.io/Coffe-Website/"
              title="View Coffee Website"
              rel="noopener noreferrer"
              target="_blank"
              ><i
                className="fa-solid fa-up-right-from-square"
                aria-hidden="true"
              ></i
            ></a>
          </div>
        </div>
        <div className="portfolio-box">
          <img
            loading="lazy"
            title="Weather Website"
            alt="Portfolio Image - Weather Website"
            src={image6}
          />
          <div className="portfolio-layer">
            <h4>Weather Website</h4>
            <p>Designed using HTML, CSS, and JavaScript</p>
            <a
              href="https://weather-omega-smoky.vercel.app"
              title="View Weather Website"
              rel="noopener noreferrer"
              target="_blank"
              ><i
                className="fa-solid fa-up-right-from-square"
                aria-hidden="true"
              ></i
            ></a>
          </div>
        </div>
        <div className="portfolio-box">
          <img
            loading="lazy"
            title="Mealify"
            alt="Portfolio Image - Mealify"
            src={image2}
          />
          <div className="portfolio-layer">
            <h4>Mealify</h4>
            <p>Designed using HTML, CSS</p>
            <a
              href="https://mealify-project.vercel.app/#home"
              title="View Mealify"
              rel="noopener noreferrer"
              target="_blank"
              ><i
                className="fa-solid fa-up-right-from-square"
                aria-hidden="true"
              ></i
            ></a>
          </div>
        </div>
        <div className="portfolio-box">
          <img
            loading="lazy"
            title="Bookmark"
            alt="Portfolio Image - Bookmark"
            src={image4}
          />
          <div className="portfolio-layer">
            <h4>Bookmark</h4>
            <p>Designed using HTML, CSS, and JavaScript</p>
            <a
              href="https://bookmarker-mocha.vercel.app/"
              title="View Bookmark"
              rel="noopener noreferrer"
              target="_blank"
              ><i
                className="fa-solid fa-up-right-from-square"
                aria-hidden="true"
              ></i
            ></a>
          </div>
        </div>
        <div className="portfolio-box">
          <img
            loading="lazy"
            title="Portfolio"
            alt="Portfolio Image"
            src={image3}
          />
          <div className="portfolio-layer">
            <h4>Portfolio</h4>
            <p>Designed using HTML, CSS</p>
            <a
              href="https://daniels-delta.vercel.app/"
              title="View Portfolio"
              rel="noopener noreferrer"
              target="_blank"
              ><i
                className="fa-solid fa-up-right-from-square"
                aria-hidden="true"
              ></i
            ></a>
          </div>
        </div>
        <div className="portfolio-box">
          <img
            loading="lazy"
            title="Portfolio"
            alt="Portfolio Image"
            src={image5}
          />
          <div className="portfolio-layer">
            <h4>Portfolio</h4>
            <p>Designed using HTML, CSS</p>
            <a
              href="https://devfolio-drab-three.vercel.app/"
              title="View Portfolio"
              rel="noopener noreferrer"
              target="_blank"
              ><i
                className="fa-solid fa-up-right-from-square"
                aria-hidden="true"
              ></i
            ></a>
          </div>
        </div>
      </div>
    </section>
  )
}
