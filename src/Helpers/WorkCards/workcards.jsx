import "./workcards.css";
import { RxExternalLink } from "react-icons/rx";
import { AiOutlineGithub } from "react-icons/ai";
import { Link } from "react-router-dom";
import imagen5 from "../../Extras/foodierFoto.png"

const WorkCards = () => {
  const works = [
    {
      id: 5,
      name: "Foodier - Food at a good price",
      img: imagen5,
      description:
        "This project has been a true collaboration where we've merged our skills and creativity to create an exceptional online experience. From the visually stunning design to the seamless functionality, every detail has been carefully crafted to deliver the best in food and savings.",
      link: "https://foodier.onrender.com/",
      git: "https://github.com/AgusLivi/PF--Foodier",
    },
  ];

  return (
    <div className="cards-container">
      {works.map((data) => {
        return (
          <div className="flip-card" data-aos="zoom-in" key={data.id}>
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <p className="title">{data.name}</p>
                <img className="card-image" src={data.img} />
              </div>
              <div className="flip-card-back">
                <p className="description">{data.description}</p>
                <div className="card-links">
                  <Link to={data.link}>
                    <RxExternalLink />
                    <p className="link-text">Demo</p>
                  </Link>
                  <Link to={data.git}>
                    <AiOutlineGithub />
                    <p className="link-text">Code</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}{" "}
    </div>
  );
};

export default WorkCards;
