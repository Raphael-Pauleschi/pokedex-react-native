import * as React from 'react';
import {
  PokeballContainer,
  PokeballUp,
  PokeballDown,
  PokeballStrip,
  PokeballImage,
} from './style';

export default function PokeballView({ imageUrl }) {
  return (
    <PokeballContainer>
      <PokeballUp />
      <PokeballStrip />
      <PokeballDown />
      <PokeballImage source={{uri: imageUrl}} />
    </PokeballContainer>
  );
}
