import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import {Tab1Screen} from '../screens/Tab1Screen';
import {Tab2Screen} from '../screens/Tab2Screen';
import {StackNavigator} from './StackNavigator';
import {styles, colores} from '../theme/appTheme';
import {Platform, Text} from 'react-native';
import {TopTapNavigator} from './TopTabNavigator';
import Icon from 'react-native-vector-icons/Ionicons';

//tab es  el footer en este caso
//según plataforma
export const Tabs = () => {
  return Platform.OS === 'ios' ? <TabsIos /> : <TabsAndroid />; // si la playtaforma es iOs lanza esa funcion.
};

//Android
const BottonTabAndroid = createMaterialBottomTabNavigator();

const TabsAndroid = () => {
  
  //BottomnTabANdroid.Navigator enbgloba a todo. BottonTAbAndroid.Screen muestra el logo y nombre y la dirección/enlace de cada botón
  return (
    <BottonTabAndroid.Navigator
      sceneAnimationEnabled={true}
      barStyle={{backgroundColor: 'grey'}}
      screenOptions={({route}) => ({
        //se llama con screenOptions para poner propiedades a los tabs
        tabBarActiveTintColor: colores.primary,
        tabBarItemStyle: styles.botomItem,
        tabBarLabelStyle: {fontSize: 15},
        tabBarIcon: ({color, focused}) => {
          let iconName: string = '';
          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'cube-outline';
              break;
            case 'Tab2Screen':
              iconName = 'disc-outline';
              break;
            case 'StackNavigator':
              iconName = 'contrast-outline';
              break;
          }
          return (
            <Text style={{color: color}}>
              <Icon name={iconName} size={30} color="#900" />
            </Text>
          ); //color llama al color del padre
        },
      })}>
      {/* llamada a página de iconos */}
      <BottonTabAndroid.Screen
        name="Tab1Screen"
        options={{title: 'Tab1'}} //coge el color del padre con las props
        //options={{title: 'Tab1', tabBarIcon:(props)=><Text style={{color:props.color}}>T1</Text>}} //coge el color del padre con las props
        component={Tab1Screen}
      />

      {/* llamada a página de iconos */}
      <BottonTabAndroid.Screen
        name="Tab2Screen"
        options={{title: 'Tab2'}}
        component={TopTapNavigator}
      />

      {/* llamada a página de pedro/María y pagia 1,2,3 */}

      <BottonTabAndroid.Screen
        name="StackNavigator"
        options={{title: 'Tab3'}}
        component={StackNavigator}
      />
    </BottonTabAndroid.Navigator>
  );
};

//iOs
const BottonTabIOS = createBottomTabNavigator();

const TabsIos = () => {
  return (
    <BottonTabIOS.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      screenOptions={({route}) => ({
        //se llama con screenOptions para poner propiedades a los tabs
        tabBarActiveTintColor: colores.primary,
        tabBarItemStyle: styles.botomItem,
        tabBarLabelStyle: {fontSize: 15},
        tabBarIcon: ({size, color, focused}) => {
          let iconName: string = '';
          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'T1';
              break;
            case 'Tab2Screen':
              iconName = 'T2';
              break;
            case 'StackNavigator':
              iconName = 'St';
              break;
          }
          return <Text style={{color: color}}>{iconName}</Text>; //color llama al color del padre
        },
      })}>
      <BottonTabIOS.Screen
        name="Tab1Screen"
        options={{title: 'Tab1'}} //coge el color del padre con las props
        //options={{title: 'Tab1', tabBarIcon:(props)=><Text style={{color:props.color}}>T1</Text>}} //coge el color del padre con las props
        component={Tab1Screen}
      />
      <BottonTabIOS.Screen
        name="Tab2Screen"
        options={{title: 'Tab2'}}
        component={TopTapNavigator}
      />
      <BottonTabIOS.Screen
        name="StackNavigator"
        options={{title: 'Tab3'}}
        component={StackNavigator}
      />
    </BottonTabIOS.Navigator>
  );
};
