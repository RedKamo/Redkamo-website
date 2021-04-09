import React from 'react';
import '../../styles/About.scss';
import astronaut1 from '../../assets/images/astronaut2.svg';
import { DiHtml5, DiCss3, DiReact, DiGit, DiSass } from 'react-icons/di';
import { SiJavascript, SiNextDotJs, SiFigma } from 'react-icons/si';

const About = () => {
  return (
    <div className="about">
      <h1>About me</h1>
      <div className="about__me">
        <p>
          Dedicated Frontend developer, always learning new technologies,
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
          <div className="about__skills__icon">
            <span>
              <DiHtml5 />
            </span>
            <p>Html</p>
          </div>
          <div className="about__skills__icon">
            <span>
              <DiCss3 />
            </span>
            <p>Css</p>
          </div>
          <div className="about__skills__icon">
            <span>
              <SiJavascript />
            </span>
            <p>JavaScript</p>
          </div>
          <div className="about__skills__icon">
            <span>
              <DiReact />
            </span>
            <p>Reactjs</p>
          </div>
          <div className="about__skills__icon">
            <span>
              <SiNextDotJs />
            </span>
            <p>Nextjs</p>
          </div>
          <div className="about__skills__icon">
            <span>
              <DiGit />
            </span>
            <p>Git</p>
          </div>
          <div className="about__skills__icon">
            <span>
              <DiSass />
            </span>
            <p>Sass</p>
          </div>
          <div className="about__skills__icon">
            <span>
              <SiFigma />
            </span>
            <p>Figma</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
