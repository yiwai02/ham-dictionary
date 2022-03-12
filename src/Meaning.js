import React from "react";

export default function Meaning (props){
    return <h5>
        {props.meaning.partOfSpeech} <br />
        {props.meaning.definitions.map(function(definitions,index){return `${index + 1} ${definitions.definition}`
        })}
        </h5>;
    }