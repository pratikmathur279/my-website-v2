import React, { Component } from 'react';
// import AboutPage from '../../components/AboutPage/AboutPage';

import Auxiliary from '../../hoc/Auxiliary';
import AboutPage from '../../components/AboutPage/AboutPage';

import Actions from '../../actions/Actions';

class AboutPageBuilder extends Component {
    constructor() {
        super();
        this.state = {
            image: './images/pratik.jpg',
            instagram: ['https://www.instagram.com/p/BzrWvDBAocp/', 'https://www.instagram.com/p/BKQyG56BAlT', 'https://www.instagram.com/p/BuaYPOagdpp/', 'https://www.instagram.com/p/BsiVvj4guPp/', 'https://www.instagram.com/p/BjYtGdjnO63/'],
            instagram_feed: [
                'https://my-website-photos.s3.amazonaws.com/IMG_0265.jpg',
                'https://my-website-photos.s3.amazonaws.com/IMG_0509.JPEG',
                'https://my-website-photos.s3.amazonaws.com/IMG_2171.JPG',
                'https://my-website-photos.s3.amazonaws.com/IMG_20200315.JPG',
                'https://my-website-photos.s3.amazonaws.com/IMG_0010.JPG',
                'https://my-website-photos.s3.amazonaws.com/IMG_0267.jfif',
                'https://my-website-photos.s3.amazonaws.com/IMG_0268.JPG',
                'https://my-website-photos.s3.amazonaws.com/IMG_2771.jpg'
            ]
        };

        this.actions = new Actions();
    }

    componentWillMount() {
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

    render() {
        return (
            <Auxiliary>
                <AboutPage state={this.state} />
            </Auxiliary>
        );
    }
}

export default AboutPageBuilder;