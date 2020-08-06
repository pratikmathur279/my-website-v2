import React, { Component } from 'react';

import Auxiliary from '../Auxiliary';
import classes from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: false,
        showAboutDrawer: false,
        navScrolled: 'none'
    }

    componentDidMount(){
        document.addEventListener("scroll", () => {
            const scrolled = window.scrollY < 100 ? "none" : "scrolled";
            this.setState({ navScrolled: scrolled });
          });
    }

    aboutDrawerClosedHandler = () => {
        this.setState({ showAboutDrawer: false });
    }

    aboutDrawerToggleHandler = () => {
        // alert("aboutDrawerToggle");
        this.setState( (prevState) => {
            return {showAboutDrawer: !prevState.showAboutDrawer}
        });
    }

    sideDrawerClosedHandler = () => {
        this.setState( { showSideDrawer: false } );
    }

    sideDrawerToggleHandler = () => {
        // console.log(document.getElementById('Burger').classList.add('active'));
        this.setState( ( prevState ) => {
            return { showSideDrawer: !prevState.showSideDrawer };
        } );
    }

    render () {
        return (
            <Auxiliary>
                <Toolbar navScrolled={this.state.navScrolled} drawerToggleClicked={this.sideDrawerToggleHandler} aboutToggleClicked={this.aboutDrawerToggleHandler} />
                <SideDrawer
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Auxiliary>
        )
    }
}

export default Layout;