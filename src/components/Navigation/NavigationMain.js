import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import pokedex from '../../services/dataJson/PokedexInfoPage';
import NavigationRegion from './NavigationRegion/NavigationRegion';


const Drawer = createDrawerNavigator();

function Navigation() {
  return (
    <Drawer.Navigator useLegacyImplementation initialRouteName="Kanto">
      {pokedex.map((dex)=> 
      <Drawer.Screen key={dex.region} name={dex.region}>
      {() => <NavigationRegion pageList={dex.pages}/>}
      </Drawer.Screen>)}
    </Drawer.Navigator>
  );
}

export default Navigation;
