import React, {useState} from 'react';
import axios from 'axios';

import "./Dictionary.css";

export default function Dictionary(){
    let [keyword, setKeyword] = useState("")

    function handleResponse(response){
        console.log(response.data);
    }

    function search(event){
        event.preventDefault();
        alert(`Searching for ${keyword}`);

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
        <input type="search" onChange={keywordChange} className="search-form" />
<button type="button" class="btn btn-outline-primary" onClick={search}>🔍</button>
 </form>
        </div>
    );
}