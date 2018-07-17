import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Navigation from "./components/Layout/Navigation";
import LoginForm from "./components/Login/LoginForm";

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <LoginForm/>
                    {/*<Navigation/>*/}

                    <Route path="/dashboard" component={Dashboard} />
                    {/*<Route path="/quote" component={Quote} />*/}
                </div>
            </Router>

        );
    }
}

export default App;
