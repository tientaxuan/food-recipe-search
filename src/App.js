import React, { useState, useEffect } from 'react';
import './App.css';
import Recipe from './Recipe';
import Alert from './Alert';

export default function App() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');
  const [error, setError] = useState(false);
  const APP_ID = 'af9a1891';
  const APP_KEY = '4e6c27a9deb23fa8d7dfa1483f41096f';
  const API = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const handleClick = (e) => {
    e.preventDefault();
    setQuery(search);
  };
  useEffect(() => {
    request();
  }, [query]);
  async function request() {
    try {
      setError(false);
      const res = await fetch(API);
      const data = await res.json();
      console.log(data);
      setRecipes(data.hits);
    } catch (e) {
      setError(true);
    }
  }
  return (
    <div className='App'>
      <form className='search-form'>
        <input
          className='search-bar'
          type='text'
          value={search}
          onChange={handleSearch}
        />
        <button className='search-button' type='submit' onClick={handleClick}>
          Search
        </button>
      </form>
      <div className='recipes'>
        {recipes.map((recipe, id) => (
          <Recipe key={id} isErrorSearch={error} {...recipe.recipe} />
        ))}
      </div>
      <Alert alert={error} />
    </div>
  );
}
