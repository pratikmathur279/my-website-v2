import React, { Component } from 'react';

class BlogBuilder extends Component {
    constructor() {
        super();
        this.state = {
            blogs: [
                {
                    url: 'https://hackernoon.com/9-javascript-design-patters-you-will-love',
                    header: '9 JavaScript Design Patterns You Will Love',
                    description: '',
                    image: 'KmNf0Wo4w4avMoWS6xST2YLQABu2-xh9304q.jpg'
                },
                {
                    url: 'https://hackernoon.com/how-to-buy-bitcoin-anonymously-the-most-secure-ways',
                    header: 'How to Buy Bitcoin Anonymously: The Most Secure Ways',
                    description: '',
                    image: 'wexjcdgw1fNEWcbWaI66m8Cri743-bsf2exe.jpg'
                },
                {
                    url: 'https://hackernoon.com/testing-evolution-and-web-applications-its-about-survival-of-the-fittest',
                    header: 'Testing, Evolution, and Web Applications: It’s About Survival of the Fittest',
                    description: '',
                    image: 'hQ098u52DzPm2Y4UITQcQXtLRAk2-ubb3g93.jpg'
                },
                {
                    url: 'https://hackernoon.com/choosing-between-prototyping-vs-mvps-in-software-development',
                    header: 'Choosing Between Prototyping vs MVPs in Software Development',
                    description: '',
                    image: 'aj3xbFpstic3cuoNnxwYiHpBNyj2-n692nzd.jpg'
                },
                {
                    url: 'https://luminousmen.com/post/what-are-the-best-engineering-principles',
                    header: 'What Are The Best Software Engineering Principles?',
                    description: '',
                    image: 'what-are-the-best-engineering-principles-6.jpg'
                },
                {
                    url: 'https://hackernoon.com/how-to-develop-a-bug-triage-process-efficiently',
                    header: 'How to Develop a Bug Triage Process Efficiently',
                    description: '',
                    image: 'D7iB4iTOHyaFEVCL0l1uPlKRMsS2-yv93gmq.jpg'
                },
            ]
        };
    }

    render() {
        const buildBlogs = (b) => {
            return (
                <div id="blog">
                    <a href={b.url} target="_blank">
                        <div className="image-container">
                            <img src={`/images/blogs/${b.image}`} />
                        </div>

                        <h3>{b.header}</h3>
                        <p>{b.description}</p>

                        <p className="read-more">Read more</p>
                    </a>
                </div >
            )
        }

        return (
            <div className="blog-builder-wrapper" >
                <div className="blog-wrapper">
                    <div className="blog-header-container">
                        <h1>My Insights</h1>
                    </div>
                </div>
                <div className="blogs-wrapper">
                    <div className="blogs-container">
                        {this.state.blogs.map(buildBlogs)}
                    </div>
                </div>
            </div>
        );
    }
}

export default BlogBuilder;