import React from 'react';
import {
  TiSocialLinkedinCircular,
  TiSocialTwitterCircular,
  TiSocialGithubCircular
} from 'react-icons/ti';
import '../../styles/Contact.scss';
import robot1 from '../../assets/images/robot1.svg';
const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact</h1>
      <div className="contact__details">
        <h3>I'm always up for chat</h3>
        <p>
          Send me an email at hi@redkamo.com <br /> or give me a shout on social
          media.
        </p>
      </div>
      <div className="contact__social">
        <a href="https://github.com/RedKamo" target="_blank">
          <TiSocialGithubCircular />
        </a>
        <a href="https://www.linkedin.com/in/camiloasuarez/" target="_blank">
          <TiSocialLinkedinCircular />
        </a>
        <a href="https://twitter.com/RedKamo_/" target="_blank">
          <TiSocialTwitterCircular />
        </a>
      </div>
      <div className="contact__image">
        <img src={robot1} alt="" />
      </div>
    </div>
  );
};

export default Contact;
