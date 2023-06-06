import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Page1, Page2, Page3, Page4 } from '../../../screens/pokedexes/GalarDex/Pages'
import PokedexEntry from '../../../screens/PokedexEntry'
import StepStack from '../StepStack'

const Stack = createNativeStackNavigator();

function NavigationGalar() {
    return (
        <Stack.Navigator initialScreen="Page1" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Page1">
                {comp => (<StepStack {...comp} next="Page2">
                    <Page1 />
                </StepStack>)}
            </Stack.Screen>
            <Stack.Screen name="Page2">
                {comp => (<StepStack {...comp} next="Page3" back="Page1">
                    <Page2 />
                </StepStack>)}
            </Stack.Screen>
            <Stack.Screen name="Page3">
                {comp => (<StepStack {...comp} next="Page4" back="Page2">
                    <Page3 />
                </StepStack>)}
            </Stack.Screen>
            <Stack.Screen name="Page4" >
                {comp => (<StepStack {...comp} back="Page3">
                    <Page4 />
                </StepStack>)}
            </Stack.Screen>
            <Stack.Screen name="PokemonDetail" component={PokedexEntry} />
        </Stack.Navigator>
    )

}

export default NavigationGalar;