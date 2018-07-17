import React, {Component} from 'react';
import QuoteList from "./QuoteList";
import AppHeader from "./AppHeader";
import axios from "axios";

class Dashboard extends Component {
    state = {
        quotes: []
    };

    componentDidMount() {
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then(response => {

                // create an array of quotes only with relevant data
                const newQuotes = response.data.map(c => {
                    return {
                        id: c.id,
                        name: c.name
                    };
                });

                // create a new "State" object without mutating
                // the original State object.
                const newState = Object.assign({}, this.state, {
                    quotes: newQuotes
                });

                // store the new state object in the component's state
                this.setState(newState);
            })
            .catch(error => console.log(error));
    }

    render() {
        return (
            <div>
                <div>
                    <div>
                        <AppHeader />
                    </div>
                    <div>

                    </div>
                    <div>
                        <QuoteList quotes={this.state.quotes}/>
                    </div>
                </div>
            </div>
        );
    }
}


export default Dashboard;