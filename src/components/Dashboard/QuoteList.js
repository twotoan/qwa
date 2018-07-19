import React from "react";
import QuoteCard from "../Quote/QuoteCard";

function QuoteList(props) {
    return (
        <div>
            <div className="quotesArea">
                <div className="column">
                    {
                        props.quotes.map(c =>
                            <QuoteCard
                                key={c.id}
                                driver={c.driver}
                                mobiletel={c.mobiletel}
                                email={c.email}
                            />)
                    }
                </div>
                <div className="column"></div>
                <div className="column"></div>
                <div className="column"></div>
                <div className="column"></div>
            </div>
        </div>
    )
}

export default QuoteList