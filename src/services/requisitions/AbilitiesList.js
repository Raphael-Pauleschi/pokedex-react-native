import React,{useState,useEffect} from 'react';
import axios from 'axios';

function AbilitiesList(pokemonData){
    const [pokemonAbilities, setPokemonAbilities] = useState([]);

    useEffect(() => {
      const fetchPokemonAbilities = async () => {
        try {
          const abilityDetails = await Promise.all(
            pokemonData.abilities.map(async (ability) => {
              const response = await axios.get(ability.ability.url);
              const englishEntry = response.data.effect_entries.find(
                (entry) => entry.language.name === 'en'
              ); 
  
              const hiddenAbility = response.data.pokemon.find((pokemon) => pokemon.pokemon.name === pokemonData.name && pokemon.is_hidden);
              return { name: ability.ability.name, effect: englishEntry ? englishEntry.effect : 'Unknown, there is no data available' , hiddenAbility };
            
            })
          );
  
          setPokemonAbilities(abilityDetails);
        } catch (error) {
          console.error('Error fetching Pokemon abilities:', error);
        }
      };
  
      fetchPokemonAbilities();
    }, [pokemonData]);
    return pokemonAbilities
}

export default AbilitiesList;