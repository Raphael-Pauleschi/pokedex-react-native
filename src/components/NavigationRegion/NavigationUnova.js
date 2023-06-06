import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Tela1 from '../../screens/pokedexes/UnovaDex/Page1'
import Tela2 from '../../screens/pokedexes/UnovaDex/Page2'
import Tela3 from '../../screens/pokedexes/UnovaDex/Page3'
import Tela4 from '../../screens/pokedexes/UnovaDex/Page4'
import Tela5 from '../../screens/pokedexes/UnovaDex/Page5'
import Tela6 from '../../screens/pokedexes/UnovaDex/Page6'
const Stack = createNativeStackNavigator();

function NavigationUnova() {
    return(
    <Stack.Navigator initialScreen="Page1" screenOption={{headerShown: true}}>
        <Stack.Screen name="Page1" component={Tela1}/>
        <Stack.Screen name="Page2" component={Tela2}/>
        <Stack.Screen name="Page3" component={Tela3}/>
        <Stack.Screen name="Page4" component={Tela4}/>
        <Stack.Screen name="Page5" component={Tela5}/>
        <Stack.Screen name="Page6" component={Tela6}/>
    </Stack.Navigator>
    )

}

export default NavigationUnova;