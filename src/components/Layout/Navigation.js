import React, {Component} from "react";

class Navigation extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <a href="/dashboard">Dashboard</a>
                        <a href="/details">Conversion Statistics</a>
                        <a href="/logout">Logout</a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Navigation;