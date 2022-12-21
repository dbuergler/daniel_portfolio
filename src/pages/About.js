import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./About.css";

const About = () => {
  const navigate = useNavigate();

  const onBlank11ImageClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onProjectsClick = useCallback(() => {
    navigate("/projects");
  }, [navigate]);

  const onContactClick = useCallback(() => {
    navigate("/contact");
  }, [navigate]);

  const onCTAContainerClick = useCallback(() => {
    window.open(
      "https://github.com/dbuergler/resume/blob/master-branch/Daniel_BuerglerResume.pdf"
    );
  }, []);

  return (
    <div className="about">
      <a className="blank-1-1" onClick={onBlank11ImageClick}/>
      <div className="navbar3">
        <b className="about-me3">About Me</b>
        <a className="projects5" onClick={onProjectsClick}>
          Projects
        </a>
        <a className="contact5" onClick={onContactClick}>
          Contact
        </a>
      </div>
      <div className="group-div3">
        <div className="biography">
          <div className="sub-heading1">
            <b className="timeline">Timeline</b>
          </div>
          <div className="content-education-data">
            <div className="cards">
              <div className="data-card">
                <div className="shapes">
                  <div className="solid" />
                  <img className="line-icon" alt="" src="../line.svg" />
                </div>
                <div className="title">University of Indianapolis (BA)</div>
                <div className="number">2013 — 2017</div>
              </div>
              <div className="data-card1">
                <div className="shapes">
                  <div className="solid" />
                  <img className="line-icon" alt="" src="../line.svg" />
                </div>
                <div className="title">Non-profit Program Manager</div>
                <div className="number">2017 — 2021</div>
              </div>
              <div className="data-card2">
                <div className="shapes">
                  <div className="solid" />
                  <img className="line-icon" alt="" src="../line.svg" />
                </div>
                <div className="title">
                  Assistant Cross Country Coach (Roncalli)
                </div>
                <div className="number">2017 — Now</div>
              </div>
              <div className="data-card1">
                <div className="shapes">
                  <div className="solid" />
                  <img className="line-icon" alt="" src="../line.svg" />
                </div>
                <div className="title"> Senior Associate SWE (Infosys)</div>
                <div className="number">2021 — Now</div>
              </div>
            </div>
          </div>
          <button className="button13">
            <div className="lets-work-together1" onClick={onCTAContainerClick}>Download Resume</div>
            <img
              className="user-interface-paper-plane1"
              alt=""
              src="../user-interface--paper-plane1.svg"
            />
          </button>
        </div>
        <div className="sub-heading2">
          <b className="timeline">Skills</b>
        </div>
        <div className="frame-div23">
          <img className="group-icon" alt="" src="../group-12.svg" />
          <img className="group-icon1" alt="" src="../group-13.svg" />
          <img className="group-icon2" alt="" src="../group.svg" />
          <img className="group-icon3" alt="" src="../group-14.svg" />
          <img className="vector-icon3" alt="" src="../vector3.svg" />
          <img className="figma-icon" alt="" src="../figma.svg" />
          <img
            className="angular-logo-logos-512-1-icon"
            alt=""
            src="../21-angular-logo-logos512-1@2x.png"
          />
        </div>
        <div className="group-div4">
          <div className="card">
            <div className="header">
              <div className="content-area">
                <b className="timeline">Web Development</b>
              </div>
            </div>
            <div className="content">
              <div className="timeline">
                I first learned web development through Eleven Fifty Academy
                which allowed me to change careers to tech and land my first
                role in the tech industry.
              </div>
            </div>
            <div className="header">
              <img
                className="illustration-code-coding-web"
                alt=""
                src="../-illustration-code-coding-web-page-online-programming-html.svg"
              />
            </div>
          </div>
          <div className="card1">
            <div className="header">
              <div className="content-area">
                <b className="timeline">UX Design</b>
              </div>
            </div>
            <div className="content">
              <div className="timeline">
                Through the Google UX Design Certificate, I have learned about
                wireframing, prototyping, and user testing when it comes to UX
                Design and website development.
              </div>
            </div>
            <div className="header">
              <img
                className="illustration-online-website-p"
                alt=""
                src="../-illustration-online-website-page-shop.svg"
              />
            </div>
          </div>
          <div className="card2">
            <div className="header">
              <div className="content-area">
                <b className="timeline">Project Management</b>
              </div>
            </div>
            <div className="content">
              <div className="timeline">
                Through previous positions, I have managed projects and programs collaboratively with colleagues and effectively fullfilled the company mission.
              </div>
            </div>
            <div className="header">
              <img
                className="illustration-laptop-checkmark"
                alt=""
                src="../-illustration-laptop-checkmark-check-advertisement.svg"
              />
            </div>
          </div>
          <div className="sub-heading3">
            <b className="timeline">About Me</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
