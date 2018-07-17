import React from "react";
import QuoteCard from "../Quote/QuoteCard";

function QuoteList(props) {
    return (
        <div>
            {props.quotes.map(c => <QuoteCard key={c.id} name={c.name}/>)}
        </div>
    )
}

export default QuoteList