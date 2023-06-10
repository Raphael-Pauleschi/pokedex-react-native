import React, { useState, useEffect } from 'react';
import axios from 'axios';

function EntriesList(url){
    const [pokemonEntries, setPokemonEntries] = useState([]);

    useEffect(() => {
      const fetchPokemonEntries = async () => {
        try {
          const response = await axios.get(url);
          const data = response.data;
          const englishEntries = data.flavor_text_entries.filter(
            (entry) => entry.language.name === 'en'
          );

          const adaptedEntries = englishEntries.map((entry) => ({
            name: entry.version.name,
            flavor_text: entry.flavor_text,
          }));
          console.log(adaptedEntries)
          setPokemonEntries(adaptedEntries);
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchPokemonEntries();
    }, [url]);

    return pokemonEntries;
}

export default EntriesList;