import React,{useState,useEffect} from 'react';
import axios from 'axios';

function VariationsList(url){
    const [pokemonVariations, setPokemonVariations] = useState([]);

  useEffect(() => {
    const fetchPokemonVariations = async () => {
      try {
        const responseVariations = await axios.get(url);
        const dataVariations = responseVariations.data.varieties.map(variation => variation.pokemon);

        setPokemonVariations(dataVariations);
      } catch (error) {
        console.error(error)
      }
    }
    fetchPokemonVariations()
  }, [url])
    return pokemonVariations
}

export default VariationsList;