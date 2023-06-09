import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import KantoDex from './NavigationRegion/NavigationKanto';
import JohtoDex from './NavigationRegion/NavigationJohto';
import HoeenDex from './NavigationRegion/NavigationHoeen';
import SinnohDex from './NavigationRegion/NavigationSinnoh';
import UnovaDex from './NavigationRegion/NavigationUnova';
import PaldeaDex from './NavigationRegion/NavigationPaldea';
import AlolaDex from './NavigationRegion/NavigationAlola';
import KalosDex from './NavigationRegion/NavigationKalos';
import GalarDex from './NavigationRegion/NavigationGalar';


const Drawer = createDrawerNavigator();

function Navigation() {
  return (
    <Drawer.Navigator useLegacyImplementation initialRouteName="Paldea">
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
