import React from "react";

import "./Meaning.css"

export default function Meaning (props){
    return <h5>
        <div className="partOfSpeech">
        {props.meaning.partOfSpeech} <br />
        </div>
        {props.meaning.definitions.map(function(definitions,index){return <div className="definition">{index + 1}. {definitions.definition}</div>
        })}
        </h5>;
    }