import React, {Component} from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Dashboard from '../Dashboard/Dashboard';

class Navigation extends Component {
    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                    </ul>

                    <Route exact path="/" component={Dashboard}/>

                </div>
            </Router>
        )
    }
}

export default Navigation;