import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

const HomePage = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=10000')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setList(data.results);
      });
  }, []);

  return (
    <div>
      <ul>
        {list.map((pokemon) => (
          <li key={pokemon.name}>
            <Link to={`/pokemon/${pokemon.name}`}>
              {pokemon.name.charAt(0).toUpperCase() + pokemon.name.substring(1)}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;

// min 1.58
