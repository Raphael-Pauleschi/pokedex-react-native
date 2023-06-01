import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import KantoDex from '../screens/pokedexes/KantoDex';
import JohtoDex from '../screens/pokedexes/JohtoDex';
import HoeenDex from '../screens/pokedexes/HoeenDex';
import SinnohDex from '../screens/pokedexes/SinnohDex';
import UnovaDex from '../screens/pokedexes/UnovaDex';
import PaldeaDex from '../screens/pokedexes/PaldeaDex';
import AlolaDex from '../screens/pokedexes/AlolaDex';
import KalosDex from '../screens/pokedexes/KalosDex';
import GalarDex from '../screens/pokedexes/GalarDex';
import PokedexEntry from '../screens/PokedexEntry'

const Drawer = createDrawerNavigator();

function Navigation() {
  return (
    <Drawer.Navigator useLegacyImplementation initialRouteName="Unova">
      <Drawer.Screen name="Kanto" component={KantoDex} />
      <Drawer.Screen name="Johto" component={JohtoDex} />
      <Drawer.Screen name="Hoeen" component={HoeenDex} />
      <Drawer.Screen name="Sinnoh" component={SinnohDex} />
      <Drawer.Screen name="Unova" component={UnovaDex} />
      <Drawer.Screen name="Kalos" component={KalosDex} />
      <Drawer.Screen name="Alola" component={AlolaDex} />
      <Drawer.Screen name="Galar" component={GalarDex} />
      <Drawer.Screen name="Paldea" component={PaldeaDex} />
       <Drawer.Screen name="PokemonDetail" component={PokedexEntry} options={{ 
         drawerLabel: () => null }} />
    </Drawer.Navigator>
  );
}

export default Navigation;
