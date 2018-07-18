// Core Imports
import React, {Component} from "react";
//import { TransitionGroup, CSSTransition } from "react-transition-group";
//import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// Material UI Imports
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import DashboardIcon from '@material-ui/icons/Dashboard';
// Component Imports
import Dashboard from '../Dashboard/Dashboard';
import NewQuotes from '../Quote/NewQuotes';

const styles = {
    root: {
        width: '100%',
    },
};


class Navigation extends Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };


    render() {

        const { classes } = this.props;
        const { value } = this.state;

        return (
            <Router>
                <BottomNavigation
                    value={value}
                    onChange={this.handleChange}
                    showLabels
                    className={classes.root}
                >
                    <BottomNavigationAction
                        label="Dashboard"
                        icon={<DashboardIcon />}
                        component={Link}
                        to="/dashboard"
                        value="dashboard"
                    />
                    <BottomNavigationAction
                        label="New Quotes"
                        icon={<RestoreIcon />}
                        component={Link}
                        to="/quotes/new"
                        value="newquotes"
                    />
                    <Route path="/dashboard" component={Dashboard}/>
                    <Route path="/quotes/new" component={NewQuotes}/>

                </BottomNavigation>
            </Router>
        )
    }
}

Navigation.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navigation);