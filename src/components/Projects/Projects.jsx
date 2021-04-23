import React from 'react';
import { Switch, Link, Route, BrowserRouter as Router } from 'react-router-dom';
import ProjectList from '../ProjectList/ProjectList';
import FigmaList from '../FigmaList/FigmaList';
import CodepenList from '../CodepenList/CodepenList';
import '../../styles/Projects.scss';

const Projects = () => {
  return (
    <div className="projects">
      <h1>Projects </h1>

      <div className="projects__container">
        <Router>
          <div className="projects__container__menu">
            <li>
              <Link to="/">Projects</Link>
            </li>
            <li>
              <Link to="/figma">Wireframes</Link>
            </li>
            <li>
              <Link to="/codepen">Codepen</Link>
            </li>
          </div>

          <div className="projects__container__render">
            <Switch>
              <Route exact path="/" component={ProjectList} />
              <Route path="/figma" component={FigmaList} />
              <Route path="/codepen" component={CodepenList} />
            </Switch>
          </div>
        </Router>
      </div>
    </div>
  );
};

export default Projects;
