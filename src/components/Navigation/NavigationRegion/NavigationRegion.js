import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import PokedexEntry from '../NavigationPokemon/NavigationPokemon'
import StepStack from '../StepStack'
import PokedexList from '../../../screens/PokedexPage';
import { useNavigation } from '@react-navigation/native';


const Stack = createNativeStackNavigator();

function NavigationRegion({ pageList }) {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            {pageList.map((page, index) => {
                const screenName = `Page${index}`;
                const nextScreenName = index < pageList.length - 1 ? `Page${index + 1}` : undefined;
                const backScreenName = index > 0 ? `Page${index - 1}` : undefined;

                return (
                    <Stack.Screen name={screenName} key={index}>
                        {() =>
                            <StepStack next={nextScreenName} back={backScreenName} navigation={useNavigation()}>
                                <PokedexList pokemonList={page.url} />
                            </StepStack>
                        }
                    </Stack.Screen>
                );
            })}
            <Stack.Screen name="PokemonDetail" component={PokedexEntry} />
        </Stack.Navigator>
    );
}



export default NavigationRegion;