import axios from 'axios';
import { TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { PokemonImage, PokemonImageContainer } from './style';

function PokemonIcon({ url }) {
  const [pokemonUrl, setPokemonUrl] = useState('');
  const [pokemonData, setPokemonData] = useState('')
  const navigation = useNavigation();
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
  return (
    <TouchableOpacity onPress={handlePress}>
    <PokemonImageContainer>
      <PokemonImage source={{ uri: pokemonUrl }} />
    </PokemonImageContainer>
    </TouchableOpacity>
  );
}
export default PokemonIcon;
