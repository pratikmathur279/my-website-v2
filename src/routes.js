var React = require('react');

//REACT ROUTER V4
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import Layout from './hoc/Layout/Layout';

import HomepageBuilder from './containers/HomepageBuilder/HomepageBuilder';
import AboutPageBuilder from './containers/AboutPageBuilder/AboutPageBuilder';
import ContactPageBuilder from './containers/ContactPageBuilder/ContactPageBuilder';
import ProjectsPageBuilder from './containers/ProjectsPageBuilder/ProjectsPageBuilder';
import ResumeBuilder from './containers/ResumeBuilder/ResumeBuilder.js';
import BlogBuilder from './containers/BlogBuilder/BlogBuilder';
import NotFound from './containers/NotFound/NotFound.js';
import Footer from '../src/components/UI/Footer/Footer';

var routes = (
    // REACT ROUTER V4
    <Router>
        <div className="App">
            <Layout />
            <Switch>
                <Route exact path="/" component={HomepageBuilder} />
                <Route path="/about" component={AboutPageBuilder} />
                <Route path="/resume" component={ResumeBuilder} />
                <Route path="/projects" component={ProjectsPageBuilder} />
                <Route path="/contact" component={ContactPageBuilder} />
                <Route path="/blog" component={BlogBuilder} />
                <Route component={NotFound} />
            </Switch>

            <Footer />
        </div>
    </Router>
);

export default routes;