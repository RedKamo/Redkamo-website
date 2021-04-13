import React from 'react';
import {
  TiSocialLinkedinCircular,
  TiSocialTwitterCircular,
  TiSocialGithubCircular
} from 'react-icons/ti';
import '../../styles/Banner.scss';
import white_icon from '../../assets/images/white_icon.svg';
import bannerimage from '../../assets/figma/bannerimg.gif';

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner__cover">
        <p>
          Hello,
          <br /> I´m <span className="banner__cover__name">Camilo Suarez</span>,
          <br /> Frontend developer and UI/UX enthusiast.
        </p>
        <div className="banner__cover__icon">
          <img src={bannerimage} alt="" />
        </div>
      </div>
      <div className="banner__social">
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
    </div>
  );
};

export default Banner;
