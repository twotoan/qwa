import React, {Component} from "react";
import {Link} from "react-router-dom";

class Navigation extends Component {
    render() {
        return (

            <div>
                <ul>
                    <li>
                        <Link to="/dashboard">Home</Link>
                    </li>
                </ul>
            </div>

        )
    }
}

export default Navigation;