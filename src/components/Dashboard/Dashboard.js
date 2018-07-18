import React, {Component} from 'react';
import QuoteList from "./QuoteList";
import axios from "axios";

class Dashboard extends Component {
    state = {
        quotes: []
    };

    componentDidMount() {
        axios
            .get("http://localhost:5678/quotes")
            .then(response => {
                console.log(response);
                // create an array of quotes only with relevant data
                const newQuotes = response.data.map(c => {
                    return {
                        id: c.id,
                        driver: c.customer.driver
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
                <QuoteList quotes={this.state.quotes}/>
            </div>
        );
    }
}

export default Dashboard;