import React from 'react';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {ChatScreen} from '../screens/ChatScreen';
import {Contacts} from '../screens/ContactsScreen';
import {AlbumsScreen} from '../screens/AlbumsScreen';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {colores, styles} from '../theme/appTheme';
import {Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialTopTabNavigator();

//createMaterialTopTabNavigator crea botones superiores, en este apartado se va a contact/chat/albums
//se instancia en Tab aquí. y Tab tiene sus propiedades
export const TopTapNavigator = () => {
  const {top} = useSafeAreaInsets(); //para que en ios se vea mejor la parte de arriba

  return (
    <Tab.Navigator
      style={{
        paddingTop: top,
      }}
      sceneContainerStyle={{backgroundColor: 'white'}}
      screenOptions={({route}) => ({
        tabBarItemStyle: styles.botomItem,
        tabBarPressColor: colores.primary,
        tabBarShowIcon: true,
        tabBarIndicatorStyle: {
          backgroundColor: colores.primary,
        },
        tabBarLabelStyle: {fontSize: 15},
        tabBarIcon: ({color, focused}) => {
          let iconName: string = '';
          switch (route.name) {
            case 'Chat':
              iconName = 'call-outline';
              break;
            case 'Contacts':
              iconName = 'calculator-outline';
              break;
            case 'Albums':
              iconName = 'clipboard-outline';
              break;
          }
          return (
            <Text style={{color: color}}>
              <Icon name={iconName} size={30} color="#900" />
            </Text>
          ); //color llama al color del padre
        },
      })}>
        
        {/* Nombre y enlace de cada boton */}
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Contacts" component={Contacts} />
      <Tab.Screen name="Albums" component={AlbumsScreen} />
    </Tab.Navigator>
  );
};
