import { useCallback, useRef} from "react";
import { useNavigate } from "react-router-dom";
import "./Contact.css";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const navigate = useNavigate();

  const onAboutMeClick = useCallback(() => {
    navigate("/about");
  }, [navigate]);

  const onProjectsClick = useCallback(() => {
    navigate("/projects");
  }, [navigate]);

  const onBlank13ImageClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onSocialClick = useCallback(() => {
    window.open("https://linkedin.com/in/danielbuergler/");
  }, []);

  const onTablerbrandTwitterClick = useCallback(() => {
    window.open("https://twitter.com/dainethemaine");
  }, []);

  const onVectorIcon2Click = useCallback(() => {
    window.open("https://github.com/dbuergler");
  }, []);


  const form = useRef();

  const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_ns5txjp', 'template_sydxzfz', form.current, 'P533h3gJjEeFy3q2W')
        .then((result) => {
            toast.success("Successfully submitted message. Talk to you soon!", result.status, result.text )
        }, (error) => {
            toast.error('Form is not submitted. Please fill in all fields and try again', error.status, error.text)
        });
        e.target.reset();
    };

  return (
    <div className="contact1">
      <div className="navbar1">
        <a className="about-me1" onClick={onAboutMeClick}>
          About Me
        </a>
        <a className="projects1" onClick={onProjectsClick}>
          Projects
        </a>
        <b className="contact2">Contact</b>
      </div>
      <img
        className="blank-1-3-icon"
        alt=""
        src="../blank1-3@2x.png"
        onClick={onBlank13ImageClick}
      />
      <div className="contact3">
        <div className="lets-discuss-your-project">
          <div className="frame-div">
            <div className="lets-connect">Let’s Connect!</div>
            <div className="connect-with-me-below-via-emai">
              Connect with me below via email or phone to discuss opportunities.
            </div>
          </div>
          <div className="adress-card">
            <div className="address-card">
              <div className="frame-div1">
                <img
                  className="location-and-map-location-pi"
                  alt=""
                  src="../location-and-map--location-pin.svg"
                />
              </div>
              <div className="frame-div2">
                <div className="address">My Email:</div>
                <div className="new-mexico-31134">
                  daniel.jbuergler@mail.com
                </div>
              </div>
            </div>
            <div className="address-card1">
              <div className="frame-div1">
                <img
                  className="location-and-map-location-pi"
                  alt=""
                  src="../location-and-map--location-pin.svg"
                />
              </div>
              <div className="frame-div2">
                <div className="address">Call Me:</div>
                <div className="new-mexico-31134">317-509-7869</div>
              </div>
            </div>
          </div>
          <div className="social-media">
            <div className="social-media-card1">
              <a className="social" href="https://github.com/dbuergler" target="_blank" onClick={onVectorIcon2Click}>
                  <img className="vector-icon" src="../vector2.svg"/>
              </a>
            </div>
            <div className="social-media-card1">
              <a className="social" href="https://twitter.com/dainethemaine" target="_blank" onClick={onTablerbrandTwitterClick}>
                  <img className="vector-icon" src="../vector1.svg"/>
              </a>
            </div>
            <div className="social-media-card1">
              <a className="social" href="https://linkedin.com/in/danielbuergler/" target="_blank" onClick={onSocialClick}>
                  <img className="vector-icon" src="../vector.svg"/>
              </a>
            </div>
            
          </div>
        </div>
        <form ref={form} onSubmit={sendEmail} className="user-infromation">
          <div className="submit-the-form-below-to-get-i">
            Submit the form below to get in touch with me on any upcoming
            opportunities or projects you may need assistance with.
          </div>
          <div className="user-infromation">
            <div className="information">
              <input
                className="name"
                name='from_name'
                type="text"
                placeholder="Name*"
                required
              />
              <input
                className="name"
                name='reply_to'
                type="email"
                placeholder="Email*"
                required
              />
              <div className="budget-subject">
                <input className="name" name='from_subject' type="text" placeholder="Subject*" />
              </div>
              <textarea
                className="message"
                name='message'
                placeholder="Message*"
                rows={5}
                required
              />
            </div>
            <button className="button">
              <div className="lets-work-together" onSubmit={sendEmail}>Submit</div>
              <img
                className="location-and-map-location-pi"
                alt=""
                src="../user-interface--paper-plane.svg"
              />
            </button>
            <div className="toast">
            <ToastContainer/>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
