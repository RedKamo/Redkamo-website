import React from 'react';
import { Switch, Link, Route, BrowserRouter as Router } from 'react-router-dom';
import ProjectList from '../ProjectList/ProjectList';
import FigmaList from '../FigmaList/FigmaList';
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
              <Link to="/figmaList">Wireframes</Link>
            </li>
            <li>
              <Link to="/codepenList">Codepen</Link>
            </li>
          </div>

          <div className="projects__container__render">
            <Switch>
              <Route exact path="/" component={ProjectList} />
              <Route path="/figmaList" component={FigmaList} />
            </Switch>
          </div>
        </Router>
      </div>
    </div>
  );
};

export default Projects;
