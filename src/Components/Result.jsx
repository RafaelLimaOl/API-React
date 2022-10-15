import React, { useState, useEffect } from "react";
import './SearchResult.css'
const Results = (props) => {

    const [repositories, setRepositories ] = useState([]);
    const [repoFilter, setRepoFilter] = useState([]);
    const [inputValue, setInputValue] = useState('');


    useEffect(()=>{
        if(inputValue.length){
          setRepoFilter(repositories.filter(repositories => repositories.name.includes(inputValue)));
        }
      }, [inputValue]);


    
    const { repos } = props

    const listRepo = repos.length !== 0
        ? repos.data.map((item) => <li>{item.name}</li>)
        : <li>Nenhum Usuário encontrado</li> ;

    const listId = repos.length !== 0 
        ? repos.data.map((item) => <li>{item.id}</li>)
        : <li></li>
    return(
        <div className="containerList">

            <ul className="header">
                <li className="headerId">ID:</li>
                <li>Repositório(s):</li>
            </ul>
            <ul>
                <li className="listID">{listId}</li>
                <li>{listRepo}</li>
            </ul>
        </div>
    )
}

export default Results