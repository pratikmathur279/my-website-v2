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
                'https://scontent-lga3-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/51729548_407104073190874_4364098733165170728_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com&_nc_cat=110&_nc_ohc=eAl9Nlj9AF8AX_k1S4e&oh=c259452a9e3132cffd796077028c3d94&oe=5F178921',
                'https://instagram.fbed1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/45997894_2176251096025081_6779844471801741480_n.jpg?_nc_ht=instagram.fbed1-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=JSMQqcviCiUAX9VxNsk&oh=bf4625e0260a9311b36ebbc0f04953c0&oe=5F15693A',
                'https://scontent-lga3-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/14278990_1211663852208651_1270364326_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com&_nc_cat=103&_nc_ohc=rPLCruRwD1MAX_sHqtK&oh=5ab3fec04fadb5782aa61ed55ad1422f&oe=5F13ED63',
                'https://instagram.fbed1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/32344029_116029645893396_2289987682173976576_n.jpg?_nc_ht=instagram.fbed1-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=PPvYDX2nqSMAX_N4mpe&oh=4ec035602d236432e59d8f75134484d6&oe=5F16ECDF',
                'https://scontent-lga3-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/66853148_655337508316950_5700091021164014387_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com&_nc_cat=106&_nc_ohc=h_eTUpjIGUQAX8aZ9WR&oh=32f9af63da015eb44f4a2103d596a1d6&oe=5F16F9C6',
                'https://scontent-lga3-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/26872444_1562391817209730_4668409097454878720_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com&_nc_cat=110&_nc_ohc=dNrCt0me0ecAX_2IfRM&oh=b4c22f7fa6a9cfb9c561122d9c480f0f&oe=5F16704E',
                'https://scontent-lga3-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/96943211_314420786382729_7951852961207303460_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com&_nc_cat=109&_nc_ohc=wFv5Xk7ypLgAX-pGz9d&oh=1456a055aede906603e6fa11aeff6690&oe=5F154AA6',
                'https://scontent-lga3-1.cdninstagram.com/v/t51.2885-15/e35/s480x480/71508022_252763482307878_1418489597457347699_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com&_nc_cat=106&_nc_ohc=IfV0TbAFrtoAX_h80xq&oh=aa78df014675cdf90705184f42841254&oe=5F1526D8'
                
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