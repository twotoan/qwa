import React, {Component} from 'react';
import './App.css';
import Navigation from './components/Layout/Navigation';

class App extends Component {
    render() {
        return (
            <div className="header">
                <Navigation/>
            </div>
        );
    }
}

export default App;
