import React from "react";
import Meaning from "./Meaning";

import "./Definitions.css"

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
            <div className="col-6 border border-success searchDefinition">
                {props.results.meanings.map(function(meaning,index){
                    return (
                        <div key ={index}>
                            <Meaning meaning = {meaning} />
                        </div>
                    );
                })}
            </div>
            <div className="col-1">
            </div>
            <div className="col-5">
                <div class="row">
                <div className="col-12 border border-success synonymResult">
                    Hi
                </div>
                <div class="col-12 border border-lightimgResult">
                    Hi
                </div>
                </div>
            </div>
        </div>
        </div>
        );
    } else {
         return null;
    }
}