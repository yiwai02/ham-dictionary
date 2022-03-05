import React, {useState} from 'react';

import "./Dictionary.css";

export default function Dictionary(){
    let [keyword, setKeyword] = useState("")

    function search(event){
        event.preventDefault();
        alert(`Searching for ${keyword}`)
    }

    function keywordChange(event){
        setKeyword(event.target.value)
    }

    return(
        <div className="Dictionary">
    <form>
        <input type="search" onChange={keywordChange} className="search-form" />
<button type="button" class="btn btn-outline-primary" onClick={search}>🔍</button>
 </form>
        </div>
    );
}