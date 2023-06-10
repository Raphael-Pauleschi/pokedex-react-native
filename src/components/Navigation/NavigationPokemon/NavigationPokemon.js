import * as React from 'react';
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import  PokemonAbilities  from '../../../screens/PokemonEntry/PokemonAbilities';
import  PokemonStats  from '../../../screens/PokemonEntry/PokemonStats';
import  PokedexEntry  from '../../../screens/PokemonEntry/PokedexEntry';
import PokemonForms from '../../../screens/PokemonEntry/PokemonForms'
import  Header  from '../../Header';

const Tab = createMaterialTopTabNavigator();

function PokemonNavigation({ route }) {

  return (
    <>
    <Header route={route}/>
      <Tab.Navigator initialRouteName='Stats'>
        <Tab.Screen name="Entries">
          {() => <PokedexEntry route={route} />}
        </Tab.Screen>
        <Tab.Screen name="Stats">
          {() => <PokemonStats route={route} />}
        </Tab.Screen>
        <Tab.Screen name="Abilities">
          {() => <PokemonAbilities route={route} />}
        </Tab.Screen>
        <Tab.Screen name="Forms">
          {() => <PokemonForms route={route} />}
        </Tab.Screen>
      </Tab.Navigator>
    </>
  );
}

export default PokemonNavigation;
