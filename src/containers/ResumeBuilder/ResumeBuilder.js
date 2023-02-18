import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Auxiliary from '../../hoc/Auxiliary';
import WorkExperience from '../../components/WorkExperience/WorkExperience';
import Education from '../../components/Education/Education';
import Certifications from '../../components/Certifications/Certifications';

import Loading from '../../components/UI/Loading/Loading';
import ReactIcons from '../../components/common/reactIcons';

import Actions from '../../actions/Actions';

class ResumeBuilder extends Component {
    constructor() {
        super();
        this.state = {
            loading: true,
            experience: [],
            technology: [],
        };

        this.actions = new Actions();
        this.createColumns = this.createColumns.bind(this);
    }

    componentWillMount() {
        let state = Object.assign({}, this.state);

        this.actions.getExperience(state.experience, (data) => {
            state.experience = data;
            state.loading = false;
            this.setState(state);
        });

        this.actions.getTechnology(state.technology, (data) => {
            var split = this.createColumns(data);
            state.technology = split;
            state.loading = false;
            this.setState(state);
        });
    }

    createColumns(data) {
        let arr = [];
        arr[0] = [];
        arr[1] = [];
        data.forEach((el) => {
            if (el.type == 'Day-to-day comfort') {
                arr[0].push(el);
            }
            else {
                arr[1].push(el);
            }
        })

        return arr;
    }

    render() {
        return (
            <Auxiliary>
                {this.state.loading && <Loading />}

                <div className="work-experience-wrapper">
                    <div className="header-wrapper">
                        <div className="header-container">
                            <h3>Dig a little deeper.</h3>
                            <div className="download">
                                <a href="https://pratik-resume.s3.amazonaws.com/PratikMathur-Resume.pdf" target="_blank" className="button"><span>Download Resume <ReactIcons id="CustomTag" size="24" icon="BsArrowRight" /></span></a>
                            </div>
                        </div>

                        <div className='home-mouse'>
                            <div className='mouse'></div>
                        </div>
                    </div>

                    <WorkExperience experience={this.state.experience} loading={this.state.loading} technology={this.state.technology} />
                    <Education />
                    <Certifications />

                    <div className="latest-projects-wrapper">
                        <div className="Section">
                            <h2>Latest Work</h2>
                            <div className="content-row">
                                <div className="latest-projects">
                                    <h3>Interested to see what I’ve been up to?</h3>
                                    <Link exact to='/projects'>View Projects</Link >
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </Auxiliary>
        );
    }
}

export default ResumeBuilder;