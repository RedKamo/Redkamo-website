import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Banner from './Banner/Banner';
import About from './About/About';
//import ProjectList from './ProjectList/ProjectList';
import Projects from './Projects/Projects';

const App = () => {
  return (
    <div>
      <Header />
      <Banner />
      <About />
      <Projects />
      <Footer />
    </div>
  );
};
export default App;
