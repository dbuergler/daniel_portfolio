import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Projects.css";

const Projects = () => {
  const navigate = useNavigate();

  const onBlank12ImageClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onAboutMeClick = useCallback(() => {
    navigate("/about");
  }, [navigate]);

  const onContactClick = useCallback(() => {
    navigate("/contact");
  }, [navigate]);

  const onButtonClick = useCallback(() => {
    window.open("mycomixappclient.herokuapp.com");
  }, []);

  const onButton1Click = useCallback(() => {
    window.open("https://jbhomeremodelingclient.herokuapp.com/");
  }, []);

  const onButton2Click = useCallback(() => {
    window.open(
      "https://www.figma.com/proto/lPjw7WYALA6tDx5uvDhdMi/Fletcher's-App?page-id=289%3A9&node-id=289%3A10&starting-point-node-id=289%3A10"
    );
  }, []);

  const onButton3Click = useCallback(() => {
    window.open(
      "https://xd.adobe.com/view/01a5540a-271b-45e0-ae32-7031d69675c2-54f6/"
    );
  }, []);

  const onButton4Click = useCallback(() => {
    window.open(
      "https://www.figma.com/proto/pvw0H6UDlbopMtLNUw6Ca3/VaxGuide-App?page-id=0%3A1&node-id=36%3A4599&viewport=429%2C2182%2C2&scaling=scale-down&starting-point-node-id=36%3A4599"
    );
  }, []);

  const onButton5Click = useCallback(() => {
    window.open(
      "https://www.figma.com/proto/gqzrpjNuFE7iSKzqvbDllv/VaxWebsite?page-id=1%3A2&node-id=5%3A4737&starting-point-node-id=5%3A4527"
    );
  }, []);

  return (
    <div className="projects2">
      <img
        className="blank-1-2-icon"
        alt=""
        src="../blank1-2@2x.png"
        onClick={onBlank12ImageClick}
      />
      <div className="navbar2">
        <a className="about-me2" onClick={onAboutMeClick}>
          About Me
        </a>
        <b className="projects3">Projects</b>
        <a className="about-me2" onClick={onContactClick}>
          Contact
        </a>
      </div>
      <div className="group-div2">
        <h1 className="sub-heading">
          <b className="projects4">Projects</b>
        </h1>
        <div className="project-card">
          <div className="project-card-1">
            <div className="project">
              <img
                className="unsplash9anj7qwy-2g-icon"
                alt=""
                src="../unsplash9anj7qwy2g@2x.png"
              />
              <div className="frame-div5">
                <div className="frame-div6">
                  <div className="frame-div7">
                    <p className="ui-ux-design">ReactJS, HTML, CSS</p>
                    <h2 className="product-admin-dashboard">
                      Comix API Project
                    </h2>
                  </div>
                  <p className="vivamus-eleifend-convallis-ant">
                    My first project using API's with ReactJs. This app allows
                    customers to sign up or log in to search for comics, edit
                    comics, delete comics, and read comics of their choice.
                  </p>
                </div>
                <button className="button1" onClick={onButtonClick}>
                  <div className="button2">Project</div>
                  <img
                    className="arrows-right-arrow"
                    alt=""
                    src="../arrows--right-arrow.svg"
                  />
                </button>
              </div>
            </div>
            <div className="project">
              <img
                className="unsplashc5dlhukewfm-icon"
                alt=""
                src="../unsplashc5dlhukewfm@2x.png"
              />
              <div className="frame-div5">
                <div className="frame-div6">
                  <div className="frame-div7">
                    <p className="ui-ux-design">
                      ReactJS, HTML, CSS, Typescript
                    </p>
                    <h2 className="product-admin-dashboard">
                      JB Home Remodeling
                    </h2>
                  </div>
                  <p className="vivamus-eleifend-convallis-ant">
                    My Final project at Eleven Fifty Academy is where I built a
                    construction management website that uses ReactJs,
                    TypeScript, and Ant Design.
                  </p>
                </div>
                <button className="button1" onClick={onButton1Click}>
                  <div className="button2">Project</div>
                  <img
                    className="arrows-right-arrow"
                    alt=""
                    src="../arrows--right-arrow.svg"
                  />
                </button>
              </div>
            </div>
            <div className="project2">
              <img
                className="unsplashm-hrflhgabo-icon"
                alt=""
                src="../unsplashm-hrflhgabo@2x.png"
              />
              <div className="frame-div5">
                <div className="frame-div6">
                  <div className="frame-div7">
                    <p className="ui-ux-design">UX/UI Design</p>
                    <h2 className="product-admin-dashboard">
                      Fletcher’s Garden Bar
                    </h2>
                  </div>
                  <p className="vivamus-eleifend-convallis-ant">
                    As part of the Google UX Design course, Fletcher's Garden
                    Bar is my first designed mobile application using Figma based on a prompt provided to me.
                  </p>
                </div>
                <button className="button1" onClick={onButton2Click}>
                  <div className="button2">Project</div>
                  <img
                    className="arrows-right-arrow"
                    alt=""
                    src="../arrows--right-arrow.svg"
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="project-card-1">
            <div className="project">
              <img
                className="unsplashc5dlhukewfm-icon"
                alt=""
                src="../unsplash8v4yxxt3mq@2x.png"
              />
              <div className="frame-div5">
                <div className="frame-div6">
                  <div className="frame-div7">
                    <p className="ui-ux-design">UI-UX DESIGN</p>
                    <h2 className="product-admin-dashboard">
                      Create Your Path Academy
                    </h2>
                  </div>
                  <p className="vivamus-eleifend-convallis-ant">
                    My second project with the Google UX Design course was a
                    mentoring app that was designed using Adobe XD.
                  </p>
                </div>
                <button className="button1" onClick={onButton3Click}>
                  <div className="button2">Project</div>
                  <img
                    className="arrows-right-arrow"
                    alt=""
                    src="../arrows--right-arrow.svg"
                  />
                </button>
              </div>
            </div>
            <div className="project">
              <img
                className="unsplashc5dlhukewfm-icon"
                alt=""
                src="../unsplash8v4yxxt3mq1@2x.png"
              />
              <div className="frame-div5">
                <div className="frame-div6">
                  <div className="frame-div7">
                    <p className="ui-ux-design">UI-UX DESIGN</p>
                    <h2 className="product-admin-dashboard">
                      VaxGuide Mobile App
                    </h2>
                  </div>
                  <p className="vivamus-eleifend-convallis-ant">
                    My third project with the Google UX Design course was a
                    vaccine app that was designed using Figma.
                  </p>
                </div>
                <button className="button1" onClick={onButton4Click}>
                  <div className="button2">Project</div>
                  <img
                    className="arrows-right-arrow"
                    alt=""
                    src="../arrows--right-arrow.svg"
                  />
                </button>
              </div>
            </div>
            <div className="project">
              <img
                className="unsplashc5dlhukewfm-icon"
                alt=""
                src="../unsplash8v4yxxt3mq1@2x.png"
              />
              <div className="frame-div5">
                <div className="frame-div6">
                  <div className="frame-div7">
                    <p className="ui-ux-design">UI-UX DESIGN</p>
                    <h2 className="product-admin-dashboard">
                      VaxGuide Web App
                    </h2>
                  </div>
                  <p className="vivamus-eleifend-convallis-ant">
                    My third project with the Google UX Design course was a
                    vaccine app that was designed using Figma.
                  </p>
                </div>
                <button className="button1" onClick={onButton5Click}>
                  <div className="button2">Project</div>
                  <img
                    className="arrows-right-arrow"
                    alt=""
                    src="../arrows--right-arrow.svg"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
