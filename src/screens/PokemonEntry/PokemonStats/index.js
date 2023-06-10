import * as React from 'react';
import formatName from '../../../services/textFormat/FormatName';
import StatsDisplay from '../../../components/StatsDisplay';
import PokemonFlatList from '../../../components/PokemonFlatList'
import VariationsList from '../../../services/requisitions/VariationsList';

function PokemonStats({ route }) {
  const pokemonData = route.params;
  const pokemonVariations = VariationsList(pokemonData.species.url)
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
