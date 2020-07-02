import React, { Component } from 'react';

import { Route, BrowserRouter } from "react-router-dom";

import Layout from './hoc/Layout/Layout';
import classes from './App.module.css';

import HomepageBuilder from './containers/HomepageBuilder/HomepageBuilder';
import AboutPageBuilder from './containers/AboutPageBuilder/AboutPageBuilder';
import ContactPageBuilder from './containers/ContactPageBuilder/ContactPageBuilder';
import ProjectsPageBuilder from './containers/ProjectsPageBuilder/ProjectsPageBuilder';
import ResumeBuilder from './containers/ResumeBuilder/ResumeBuilder.js';
import Footer from '../src/components/UI/Footer/Footer';

class App extends Component {
  render () {
    return (
      <BrowserRouter>
      <div classes={classes.App}>
        
        <Layout/>
        <div className="content">
        <Route exact path="/" component={HomepageBuilder}/>
            <Route path="/about" component={AboutPageBuilder}/>
            <Route path="/resume" component={ResumeBuilder} />
            <Route path="/projects" component={ProjectsPageBuilder}/>
            <Route path="/contact" component={ContactPageBuilder}/>
        </div>

        <Footer />
      </div>
      </BrowserRouter>
      
    );
  }
}

export default App;
