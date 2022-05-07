import React, {useState} from 'react';
import axios from 'axios';

import Definition from "./Definition";
import "./Dictionary.css";

export default function Dictionary(){
    let [keyword, setKeyword] = useState("")
    let [definition, setDefinition] = useState(null)

    function handleResponse(response){
        console.log(response.data[0]);
        setDefinition(response.data[0]);
    }

    function search(event){
        event.preventDefault();

        //source: https://dictionaryapi.dev/
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiUrl).then(handleResponse);
    }

    function keywordChange(event){
        setKeyword(event.target.value);
    }

    return(
        <div className="Dictionary">
    <form>
        <input type="search" placeholder='search' onChange={keywordChange} className="search-form" />
<button type="submit" class="btn btn-outline-success" onClick={search}>🔍</button>
 </form>

 <Definition results={definition} />
        </div>
    );
}