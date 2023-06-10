import React from 'react';
import { FlatList } from 'react-native';
import PokemonIcon from '../PokemonIcon';

import { RenderRowSeparator, RenderSeparator, PokemonContainer } from './style';

function PokemonFlatList({ pokemonList, notALink }) {
 
  const renderPokemonIcon = ({ item }) => (
    <PokemonContainer>
      <PokemonIcon key={item.name} url={item.url} notALink={notALink}/>
    </PokemonContainer>
  );

  return (
    <FlatList
      data={pokemonList}
      keyExtractor={(item) => item.name}
      renderItem={renderPokemonIcon}
      numColumns={3}
      columnWrapperStyle={{
        justifyContent: 'center',
      }}
      ItemSeparatorComponent={() => <RenderSeparator />}
      ListFooterComponent={() => <RenderRowSeparator />}
    />
  );
}

export default PokemonFlatList;
