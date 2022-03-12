import React from "react";
import Meaning from "./Meaning";

export default function Definition(props){
    console.log(props.results);
    if (props.results) {
        return (
        <div>
        <div className="row">
            <div className="col-12 searchTerm">
            <h2><b>{props.results.word}</b></h2>
            {props.results.phonetic}
            </div>
            <div className="col-6 searchDefinition">
                {props.results.meanings.map(function(meaning,index){
                    return (
                        <div key ={index}>
                            <Meaning meaning = {meaning} />
                        </div>
                    );
                })}
            </div>
            <div className="col-6 searchImage">
            </div>
        </div>
        </div>
        );
    } else {
         return null;
    }
}