import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Screen1 from '../../../screens/pokedexes/UnovaDex/Page1'
import Screen2 from '../../../screens/pokedexes/UnovaDex/Page2'
import Screen3 from '../../../screens/pokedexes/UnovaDex/Page3'
import Screen4 from '../../../screens/pokedexes/UnovaDex/Page4'
import Screen5 from '../../../screens/pokedexes/UnovaDex/Page5'
import Screen6 from '../../../screens/pokedexes/UnovaDex/Page6'
import StepStack from '../StepStack'

const Stack = createNativeStackNavigator();

function NavigationUnova() {
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
                {comp => (<StepStack {...comp} next="Page5" back="Page3">
                    <Screen4 />
                </StepStack>)}
            </Stack.Screen>
            <Stack.Screen name="Page5">
                {comp => (<StepStack {...comp} next="Page6" back="Page4">
                    <Screen5 />
                </StepStack>)}
            </Stack.Screen>
            <Stack.Screen name="Page6">
                {comp => (<StepStack {...comp} back="Page5">
                    <Screen6 />
                </StepStack>)}
            </Stack.Screen>
        </Stack.Navigator>
    )

}

export default NavigationUnova;