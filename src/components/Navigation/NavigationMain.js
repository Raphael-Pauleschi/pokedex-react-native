import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import KantoDex from './NavigationRegion/NavigationKanto';
import JohtoDex from '../../screens/pokedexes/JohtoDex';
import HoeenDex from './NavigationRegion/NavigationHoeen';
import SinnohDex from './NavigationRegion/NavigationSinnoh';
import UnovaDex from './NavigationRegion/NavigationUnova';
import PaldeaDex from '../../screens/pokedexes/PaldeaDex';
import AlolaDex from './NavigationRegion/NavigationAlola';
import KalosDex from '../../screens/pokedexes/KalosDex';
import GalarDex from '../../screens/pokedexes/GalarDex';


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
    </Drawer.Navigator>
  );
}

export default Navigation;
