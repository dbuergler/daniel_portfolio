import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  const navigate = useNavigate();

  const onAboutMeClick = useCallback(() => {
    navigate("/about");
  }, [navigate]);

  const onProjectsClick = useCallback(() => {
    navigate("/projects");
  }, [navigate]);

  const onContactClick = useCallback(() => {
    navigate("/contact");
  }, [navigate]);

  const onHireButtonClick = useCallback(() => {
    window.open(
      "https://github.com/dbuergler/resume/blob/master-branch/Daniel_BuerglerResume.pdf"
    );
  }, []);

  const onSeeMyProjectsClick = useCallback(() => {
    navigate("/projects");
  }, [navigate]);

  

  return (
    <div className="landing-page">
      <div className="group-div">
        <div className="navbar">
          <a className="about-me" onClick={onAboutMeClick}>
            About Me
          </a>
          <a className="projects" onClick={onProjectsClick}>
            Projects
          </a>
          <a className="contact" onClick={onContactClick}>
            Contact
          </a>
        </div>
        <p className="i-design-and-develop-experienc">
          I design and develop experiences that make people’s lives simpler
          through Web and Mobile apps. I work with Figma, HTML5, CSS3,
          JavaScript, React, ReactNative and Angular.
        </p>
        <div className="cta">
          <button className="hire-button" onClick={onHireButtonClick}>
            <b className="hire-me">Hire Me</b>
          </button>
          <div className="projects-button">
            <button className="see-my-projects" onClick={onSeeMyProjectsClick}>
              See My Projects
            </button>
          </div>
        </div>
        <img
          className="background-1-icon"
          alt=""
          src="../background-1@2x.png"
        />
        <img className="blank-1-1-icon" alt="" src="../blank1-1@2x.png" />
        <div className="group-div1">
          <b className="hi-im-daniel-front-end-dev">
            <p className="hi">
              <span>Hi.</span>
            </p>
            <p className="hi">
              <span>I’m Daniel,</span>
            </p>
            <p className="front-end-developer-and-design">
              <span>Front-end Developer and Designer.</span>
            </p>
          </b>
          <img className="emoji-icon" alt="" src="../emoji.svg" />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
