import React, { Component } from 'react';

import { isMobile } from 'react-device-detect';

import Auxiliary from '../Auxiliary';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showSideDrawer: false,
            showAboutDrawer: false,
            navScrolled: 'none'
        }

        this.sideDrawerClosedHandler = this.sideDrawerClosedHandler.bind(this);
        this.sideDrawerToggleHandler = this.sideDrawerToggleHandler.bind(this);
        this.elementScrollData = this.elementScrollData.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.elementScrollData, true);
    }

    sideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false });
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer };
        });
    }

    elementScrollData = () => {
        // if (!isMobile) {
        const scrolled = window.scrollY < 100 ? "none" : "scrolled";
        this.setState({ navScrolled: scrolled });
        // }
    }

    render() {
        return (
            <Auxiliary>
                <Toolbar navScrolled={this.state.navScrolled} drawerToggleClicked={this.sideDrawerToggleHandler} />
                <SideDrawer
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler}
                />
                <main className="Content">
                    {this.props.children}
                </main>
            </Auxiliary>
        )
    }
}

export default Layout;