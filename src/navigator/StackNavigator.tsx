import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Pag1Screen} from '../screens/Page1Screen';
import {Pag2Screen} from '../screens/Page2Screen';
import {Pag3Screen} from '../screens/Page3Screen';
import {PersonaScreen} from '../screens/PersonaScreen';

//tipado para usar en las páginas del stacknavigator
export type RootStackParams = {
  Pag1Screen: undefined; //mismo nombre que en name
  Pag2Screen: undefined;
  Pag3Screen: undefined;
  PersonaScreen: {id: number; nombre: string};
};

//Se instancia createStackNavigator y se le dan las props de RootStackParams
const Stack = createStackNavigator<RootStackParams>();
//stackNavigator Básico, navegación por cartas/stack, por páginas. aquí son lamadas
//Esta es la construcción general del stack, de todas las cartas de la baraja. 
//la  "carta" que sale primero es la pag1screen
export const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          elevation: 0,
        },
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Stack.Screen
        name="Pag1Screen"
        options={{title: 'Página 1'}}
        component={Pag1Screen}
      />
      <Stack.Screen
        name="Pag2Screen"
        options={{title: 'Página 2'}}
        component={Pag2Screen}
      />
      <Stack.Screen
        name="Pag3Screen"
        options={{title: 'Página 3'}}
        component={Pag3Screen}
      />
      <Stack.Screen
        name="PersonaScreen"
        options={{title: 'Página Persona'}}
        component={PersonaScreen}
      />
    </Stack.Navigator>
  );
};
