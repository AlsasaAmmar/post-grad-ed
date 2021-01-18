
import React, { useState } from 'react'
import { useHistory } from "react-router-dom";

import './Search.css'

function Search() {
    let history = useHistory();
    const [input, setInput] = useState('')
    const handleInput = (e) => {
        setInput(e.target.value)
        if (input.length > 3) {
            history.push({ pathname: '/search', search: `?name=${input}` })
        }
    }
    const handleBlur = () => {
        history.push('/')
    }

    return (
        <div className="search_container">
            <input className="searchInput" type="text" placeholder="search characters by name ..." onChange={handleInput} onBlur={handleBlur} value={input} />
        </div>
    )
}

export default Search
