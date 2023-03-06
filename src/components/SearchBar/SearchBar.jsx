import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FilterHandler from '../Filters/FilterHandler';
import './SearchBar.css';

export default function SearchBar() {
    const [name, setName] = useState('');

    const handleChange = (e) => {
        setName(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name && name !== "") {
            setName({})
        }
    };

    
  return (
    <div className='search-bar-container'>
            <div className='search-form'>
                <form className='search-form' onSubmit={handleSubmit}>
                    <input
                        className='input'
                        type='text'
                        autoComplete='off'
                        onChange={handleChange}
                    />
                    <div>
                        <Link to={name ? `/home/name/${name}`: `/home`}>
                            <button type='submit'>
                                Search
                            </button>
                        </Link>
                    </div>
                </form>
            </div>
           <div>
                <FilterHandler />
            </div>
        </div>
  )
}
