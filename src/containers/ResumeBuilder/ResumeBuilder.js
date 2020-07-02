import React, { Component } from 'react';

import Auxiliary from '../../hoc/Auxiliary';
import WorkExperience from '../../components/WorkExperience/WorkExperience';
import Education from '../../components/Education/Education';
import Certifications from '../../components/Certifications/Certifications';

import Actions from '../../actions/Actions';

import _ from 'lodash';

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

      componentWillMount(){
        let state = Object.assign({}, this.state);
        
        this.actions.getExperience(state.experience, (data)=> {
          state.experience = data;
          state.loading = false;
          this.setState(state);
        });

        this.actions.getTechnology(state.technology, (data)=> {
            var split = this.createColumns(data);
            state.technology = split;
            state.loading = false;
            this.setState(state);
          });   
    }

    createColumns(data){
        // let index = 0;
        // data.forEach((el,i) => {
        //     console.log(el);
        //     if(el.type == 'Experience With'){
        //         index = i;
        //         console.log(index);
        //     }
        // });
        // var arr = [];
        // var original = clone(data);

        // while(original.length > 0){
        //     var split = original.splice(0, index);
        //     arr.push(split);
        // }

        let arr = [];
        arr[0] = [];
        arr[1] = [];
        data.forEach((el)=>{
            if(el.type == 'Day-to-day comfort'){
                arr[0].push(el);
            }
            else{
                arr[1].push(el);
            }
        })
        
        return arr;
    }

    render () {
        return (
            <Auxiliary>
                <WorkExperience experience={this.state.experience} loading={this.state.loading} technology={this.state.technology} />
                <Education />
                <Certifications />
            </Auxiliary>
        );
    }
}

export default ResumeBuilder;