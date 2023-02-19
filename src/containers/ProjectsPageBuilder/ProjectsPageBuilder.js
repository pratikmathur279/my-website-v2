import React, { Component } from "react";
import _ from "lodash";

import Auxiliary from "../../hoc/Auxiliary";
import ProjectInformation from "../../components/Projects/ProjectInformation/ProjectInformation";

import Project from "../../components/Projects/Project/Project";

import Modal from "../../components/UI/Modal/Modal";

import Actions from "../../actions/Actions";

class ProjectsPageBuilder extends Component {
	constructor() {
		super();
		this.state = {
			isFlipped: false,
			showProject: false,
			loading: true,
			selected: {},
			currentImageIndex: 0,
			projects: [],
			description: {
				description1: "Click on the images to view details",
			},
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
		if (this.state.showProject) {
			document.getElementsByTagName("body")[0].classList.remove("no-scroll");

			this.setState({ showProject: false });
		} else {
			let state = Object.assign({}, this.state);
			console.log(state);
			let project = _.find(state.projects, (p) => {
				return p.index == id;
			});

			if (project) {
				state.showProject = true;
				state.selected = project;
				document.getElementsByTagName("body")[0].classList.add("no-scroll");
				this.setState(state);
			}
		}
	}

	closeModalHandler = () => {};

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
				<Project
					card={card}
					key={card.index}
					src={card.url}
					id={card.index}
					toggleModal={this.openModalHandler}
				/>
			);
		};
		return (
			<Auxiliary>
				<div className="projects-wrapper">
					<div className="header-wrapper">
						<div className="header-container">
							<h3 className="ProjectsHeader">Projects</h3>
						</div>

						<div className="home-mouse">
							<div className="mouse"></div>
						</div>
					</div>

					<div
						className="Modal"
						style={{
							transform: this.state.showProject
								? "translateY(0)"
								: "translateY(-100vh)",
							opacity: this.state.showProject ? "1" : "0",
						}}
					>
						<div className="modal-content">
							<div
								id="close"
								onClick={() => {
									this.openModalHandler();
								}}
							></div>
							<ProjectInformation
								showProject={this.state.showProject}
								card={this.state.selected}
							/>
						</div>
					</div>

					<div className="ProjectRow">{this.state.projects.map(buildRow)}</div>
				</div>
			</Auxiliary>
		);
	}
}

export default ProjectsPageBuilder;
