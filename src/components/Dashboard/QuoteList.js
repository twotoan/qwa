import React from "react";
import QuoteCard from "../Quote/QuoteCard";

function QuoteList(props) {
    return (
        <div>
            {
                props.quotes.map(c => <QuoteCard key={c.id} driver={c.driver}/>)
            }
        </div>
    )
}

export default QuoteList