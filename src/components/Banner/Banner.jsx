import React from 'react'
import {TiSocialLinkedinCircular, TiSocialTwitterCircular,TiSocialGithubCircular } from 'react-icons/ti';

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner__cover">
      	<p>Hello,<br/> I´m <span className="banner__cover__name">Camilo Suarez</span>, <br/> Frontend developer and UI/UX enthusiast. </p>
        <div className="banner__cover__social">
          <a href="https://www.linkedin.com/in/camiloasuarez/" target="_blank"><TiSocialGithubCircular/></a>
          <a href="https://www.linkedin.com/in/camiloasuarez/" target="_blank"><TiSocialLinkedinCircular/></a>
          <a href="https://www.linkedin.com/in/camiloasuarez/" target="_blank"><TiSocialTwitterCircular/></a>
        </div>
      </div>
  	</div>
  )
}

export default Banner
