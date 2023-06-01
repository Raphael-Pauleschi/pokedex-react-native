import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PokemonList(url){
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    const fetchPokemonList = async () => {
      const response = await axios.get(
        url
      );
      const data = response.data.results;
      setPokemonList(data);
    };
    fetchPokemonList();
  }, [url]);
return pokemonList;
}

export default PokemonList;