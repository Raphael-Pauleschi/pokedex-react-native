import React, { useState, useEffect } from 'react';
import formatName from '../../../services/textFormat/FormatName';
import StatsDisplay from '../../../components/StatsDisplay';
import Axios from 'axios';
import PokemonFlatList from '../../../components/PokemonFlatList'

function PokemonStats({ route }) {
  const pokemonData = route.params;
  const [pokemonVariations, setPokemonVariations] = useState([]);

  useEffect(() => {
    const fetchPokemonVariations = async () => {
      try {
        const responseVariations = await Axios.get(pokemonData.species.url);
        const dataVariations = responseVariations.data.varieties.map(variation => variation.pokemon);

        setPokemonVariations(dataVariations);
      } catch (error) {
        console.error(error)
      }
    }
    fetchPokemonVariations()
  }, [pokemonData])


  return (
    <>
      {pokemonData.stats.map((pokemonStats, index) => (
        <StatsDisplay key={index}
          label={formatName(pokemonStats.stat.name)}
          value={pokemonStats.base_stat} />
      ))}

      {pokemonVariations.length > 1 && (
        <PokemonFlatList pokemonList={pokemonVariations} />
      )}

    </>
  );
}

export default PokemonStats;
