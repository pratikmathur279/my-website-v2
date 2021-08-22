import React, { Component } from 'react';

import Auxiliary from '../../hoc/Auxiliary';
import ProjectInformation from '../../components/Projects/ProjectInformation/ProjectInformation';
import classes from './ProjectsPageBuilder.module.css';

import Project from '../../components/Projects/Project/Project';

import Modal from '../../components/UI/Modal/Modal';

import Actions from '../../actions/Actions';

class ProjectsPageBuilder extends Component {
    constructor() {
        super();
        this.state = {
            isFlipped: false,
            showProject: false,
            loading: true,
            selected: {},
            original: [],
            split: [],
            currentImageIndex: 0,
            projects: [],
            description: {
                description1: "Click on the images to view details"
            }
        };
        this.createRows = this.createRows.bind(this);
        this.openModalHandler = this.openModalHandler.bind(this);
        this.closeModalHandler = this.closeModalHandler.bind(this);
        this.actions = new Actions();
    }

    componentWillMount() {
        let state = Object.assign({}, this.state);
        this.actions.getProjects(state.projects, (data) => {
            state.projects = data;
            let projects = state.projects;
            state.loading = false;
            this.setState(state);
        });
    }

    openModalHandler(id) {
        let state = Object.assign({}, this.state);
        var projects = state.original;

        for (var i in projects) {
            if (id == projects[i].index) {
                state.selected = projects[i];
            }
        }
        state.showProject = true;
        document.getElementsByTagName('body')[0].classList.add("no-scroll");
        this.setState(state);
    }

    closeModalHandler = () => {
        this.setState({ showProject: false });
    }

    createRows(original) {
        var arr = [];
        while (original.length > 0) {
            var split = original.splice(0, 3);
            arr.push(split);
        }
        return arr;
    }

    render() {
        const buildRow = (card) => {
            return (
                <Project card={card} key={card.index} src={card.url} id={card.index} />
            );
        }
        return (
            <Auxiliary>
                <div className={classes.ProjectsContainer}>
                    <div className={classes.title}>
                        <h3 className={classes.ProjectsHeader}>Projects</h3>
                    </div>
                </div>
                <Modal show={this.state.showProject} modalClosed={this.closeModalHandler}>
                    <ProjectInformation showProject={this.state.showProject} card={this.state.selected} />
                </Modal>

                <div className={classes.ProjectRow}>
                    {this.state.projects.map(buildRow)}
                </div>
            </Auxiliary>
        );
    }
}

export default ProjectsPageBuilder;