import React from 'react';
import '../../styles/About.scss';
import astronaut1 from '../../assets/images/astronaut1.svg';

import { DiHtml5, DiCss3, DiReact, DiGit, DiSass } from 'react-icons/di';
import { SiJavascript, SiNextDotJs, SiFigma } from 'react-icons/si';

const About = () => {
  return (
    <div className="about">
      <h1>About me</h1>
      <div className="about__me">
        <p>
          Dedicate Frontend developer, always learning new technologies,
          currently studying at Platzi master program and working on personal
          projects with JavaScript and Reactjs, High detail in user experience
          and responsive design, Passionate about technology, chess and
          astronomy.
        </p>
        <img src={astronaut1} alt="" />
      </div>
      <div className="about__skills">
        <h1>Skills</h1>
        <div className="about__skills__icons">
          <span>
            <DiHtml5 />
          </span>
          <span>
            <DiCss3 />
          </span>
          <span>
            <SiJavascript />
          </span>
          <span>
            <DiReact />
          </span>
          <span>
            <SiNextDotJs />
          </span>
          <span>
            <DiGit />
          </span>
          <span>
            <DiSass />
          </span>
          <span>
            <SiFigma />
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;
