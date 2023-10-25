import { TypeAnimation } from "react-type-animation";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import "./hero.css";
import Resume from "../../Extras/CV-Sam.pdf";
import Sam from "../../Extras/SamIMG.jpg";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <div className="hero-container">
        <div className="left" data-aos="fade-up">
          <h2>Hi, I am Samuel Díaz</h2>

          <TypeAnimation
            sequence={[
              "Web Developer",
              2000,
              "Back-end && Front-end",
              2000,
              "Full Stack Developer",
              2000,
              "",
            ]}
            speed={30}
            wrapper="h1"
            repeat={Infinity}
            className="Text"
          />

          <p data-aos="fade-up" className="description">
            I&apos;m a FullStack Developer, graduated from &quot;Henry&quot;
          </p>

          <div data-aos="fade-up" className="buttons">
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/samuel-diaz-584627264"
            >
              <span> Contact me</span>
            </a>
            <a href={Resume} download>
              <div>
                CV <FiDownload />
              </div>
            </a>
          </div>

          <div className="icons flex mt-5">
            <ul data-aos="fade-up" data-aos-duration="1500">
              <li>
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://github.com/DSamuelEC"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li>
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://www.linkedin.com/in/samuel-diaz-584627264"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="right">
          <div className="image">
            <img
              data-aos="fade-up"
              src={Sam}
              alt="me"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
