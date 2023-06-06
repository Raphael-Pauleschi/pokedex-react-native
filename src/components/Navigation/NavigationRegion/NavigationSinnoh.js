import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Screen1 from '../../../screens/pokedexes/SinnohDex/Page1'
import Screen2 from '../../../screens/pokedexes/SinnohDex/Page2'
import Screen3 from '../../../screens/pokedexes/SinnohDex/Page3'
import Screen4 from '../../../screens/pokedexes/SinnohDex/Page4'
import PokedexEntry from '../../../screens/PokedexEntry'
import StepStack from '../StepStack'

const Stack = createNativeStackNavigator();

function NavigationSinnoh() {
    return (
        <Stack.Navigator initialScreen="Page1" screenOptions={{headerShown: false}}>
            <Stack.Screen name="Page1">
                {comp => (<StepStack {...comp} next="Page2">
                    <Screen1 />
                </StepStack>)}
            </Stack.Screen>
            <Stack.Screen name="Page2">
                {comp => (<StepStack {...comp} next="Page3" back="Page1">
                    <Screen2 />
                </StepStack>)}
            </Stack.Screen>
            <Stack.Screen name="Page3">
                {comp => (<StepStack {...comp} next="Page4" back="Page2">
                    <Screen3 />
                </StepStack>)}
            </Stack.Screen>
            <Stack.Screen name="Page4" >
                {comp => (<StepStack {...comp} back="Page3">
                    <Screen4 />
                </StepStack>)}
            </Stack.Screen>
            <Stack.Screen name="PokemonDetail" component={PokedexEntry}/>
        </Stack.Navigator>
    )

}

export default NavigationSinnoh;