import React, { Component } from 'react';
// import AboutPage from '../../components/AboutPage/AboutPage';

import Auxiliary from '../../hoc/Auxiliary';
import AboutPage from '../../components/AboutPage/AboutPage';

import Actions from '../../actions/Actions';

class AboutPageBuilder extends Component {
    constructor(){
        super();
        this.state = {
            image: './images/pratik.jpg',
            description: {
                description1: "My name is Pratik Mathur. I am a web developer, currently working at Total Mortgage Services, LLC. My journey as a developer started at the age of 14, where I was introduced to the concepts of web development such as HTML and CSS. After that, I got my Bachelors and Master’s degree in Computer Science. This has helped me widen my range of knowledge and gather experiences in the field of Web Development.",
                description2: "Constantly seeking to improve my skillset, I thrive on learning new web technologies in my spare time through online resources such as udemy.com and coursera.org, as well as diving head-first into new and unfamiliar projects.",
                description3: "In my spare time, you’ll find me playing video games, playing soccer and learning new programming languages"
            },
            instagram: ['https://www.instagram.com/p/BzrWvDBAocp/', 'https://www.instagram.com/p/BKQyG56BAlT', 'https://www.instagram.com/p/BuaYPOagdpp/', 'https://www.instagram.com/p/BsiVvj4guPp/', 'https://www.instagram.com/p/BjYtGdjnO63/'],
            instagram_feed: [
                'https://my-website-photos.s3.amazonaws.com/IMG_0265.jpg',
                'https://my-website-photos.s3.amazonaws.com/IMG_0509.JPEG',
                'https://my-website-photos.s3.amazonaws.com/IMG_2171.JPG',
                'https://my-website-photos.s3.amazonaws.com/IMG_20200315.JPG',
                'https://my-website-photos.s3.amazonaws.com/IMG_0267.JPG',
                'https://my-website-photos.s3.amazonaws.com/IMG_0268.JPG',
                'https://my-website-photos.s3.amazonaws.com/IMG_0909.jpg',
                'https://my-website-photos.s3.amazonaws.com/IMG_2771.jpg'
            ]
        };
        
        this.actions = new Actions();
    }

    componentWillMount(){
        let feed = this.state.instagram;
        
        // let instagram_feed = [];
        // feed.forEach(element => {
        //     this.actions.getInstagramFeed( element, (data) =>{ 
        //         instagram_feed.push(data);
        //         if(instagram_feed.length === feed.length){
        //             this.setState({instagram_feed: instagram_feed});
        //         }
        //     });
        // });       
    }

    render () {
        return (
            <Auxiliary>
                <AboutPage state={this.state} />
            </Auxiliary>
        );
    }
}

export default AboutPageBuilder;