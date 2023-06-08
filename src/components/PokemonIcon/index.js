import axios from 'axios';
import { ActivityIndicator, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  PokeballContainer,
  PokeballUp,
  PokeballDown,
  PokeballStrip,
  PokeballImage,
} from './style';

function PokemonIcon({ url }) {
  const [loading, setLoading] = useState(true);
  const [pokemonUrl, setPokemonUrl] = useState('');
  const [pokemonData, setPokemonData] = useState('')
  const navigation = useNavigation();

  const handleImageLoad = () => {
    setLoading(false);
  };

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const response = await axios.get(url);
        const dataUrl = response.data.sprites.front_default;
        setPokemonUrl(dataUrl);
        setPokemonData(response.data)
      } catch (error) {
        console.error(error);
      }
    };

    fetchPokemonData();
  }, [url]);
  const handlePress = () => {


    navigation.navigate('PokemonDetail', pokemonData);
  };

  if (!pokemonUrl) {
    return null; // Render nothing if the URI is empty
  }

  return (
    <TouchableOpacity onPress={handlePress}>

      <PokeballContainer>
        {loading && <ActivityIndicator />}
        <PokeballUp />
        <PokeballStrip />
        <PokeballDown />
        <PokeballImage source={{ uri: pokemonUrl }}
          onLoad={handleImageLoad}
          resizeMode="contain" />
      </PokeballContainer>
    </TouchableOpacity>
  );
}

export default PokemonIcon;