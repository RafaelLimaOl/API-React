// Imports:

import React, { useState } from "react";
import axios from 'axios';
import Results from "./Result";

const SearchBar = () => {

    const [search, setSearch] = useState('');
    const [repos, setRepo] = useState([]);

    const handleChange = (event) =>{
        setSearch(event.target.value);
    }

    const handleClick = async () => {
 
        try{
            const result = await axios(`https://api.github.com/users/${search}/repos`);
            setRepo(result);
        } catch(erro){
            console.log(erro);
        }
    }
    
    return(
        <div className="containerButton">
            <input 
                type="text" 
                onChange={handleChange}
                />
                
            <button onClick={handleClick}>Procurar</button>
            

            <Results repos={repos}/>
        </div>
    )
}

export default SearchBar