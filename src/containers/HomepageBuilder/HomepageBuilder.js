import React, { Component } from 'react';

import Auxiliary from '../../hoc/Auxiliary';
import Homepage from '../../components/Homepage/Homepage';
import Actions from '../../actions/Actions';

class HomepageBuilder extends Component {
	constructor() {
		super();
		this.state = {
			isFlipped: false,
			name: 'Pratik Mathur',
			hexagons: [
				{ id: 0, name: 'IoIosSpeedometer', title: 'Fast', desc: 'Fast load times and lag free interaction' }, 
				{ id: 1, name: 'FaLaptop', title: 'Responsive', desc: 'My layouts will work on any device.' }, 
				{ id: 2, name: 'AiOutlineBulb', title: 'Intuitive', desc: 'Strong preference for easy to use, intuitive UX/UI.' }, 
				{ id: 3, name: 'FaRocket', title: 'Dynamic', desc: 'I love making dynamic websites' }
			],
			skills: [],
			description: {
				description1: "Click on the images to view details"
			}
		};
		this.actions = new Actions();
		this.handleClick = this.handleClick.bind(this);
	}

	componentWillMount() {
		let state = Object.assign({}, this.state);
		this.actions.getSkills(state.skills, (data) => {
			state.skills = data;
			this.setState(state);
		});
	}

	handleClick(e) {
		// e.preventDefault();
		console.log("clicked " + e.target.id);
		var temp = this.state.projects;
		for (var i in temp) {
			if (temp[i].index == e.target.id) {
				temp[i].isFlipped = !temp[i].isFlipped;

				this.setState({ projects: temp });
				// this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
			}
		}
	}

	createRows(original) {
		var arr = [];
		while (original.length > 0) {
			var split = original.splice(0, 2);
			arr.push(split);
		}
		return arr;
	}

	render() {
		return (
			<div>
				<Homepage image='/images/photo.jpg' alt={this.state.name} hexagons={this.state.hexagons} skills={this.state.skills} projects={this.state.projects} mouseClick={this.handleClick.bind(this)} isFlipped={this.state.isFlipped} />
			</div>
		);
	}
}

export default HomepageBuilder;