import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {SettingsScreen} from '../screens/SettingsScreen';
import {Image, Text, View, TouchableOpacity} from 'react-native';
import {styles} from '../theme/appTheme';
import {Tabs} from './Tabs';

const Drawer = createDrawerNavigator();

//menu lateral, deslizante, y sus dos botones
//drawernavigation para este tipo de menus
export const MenuLateral = () => {
  return (
    <Drawer.Navigator drawerContent={props => <MenuInterno {...props} />}>
      <Drawer.Screen name="Tabs" component={Tabs} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  );
};

//menú general, con cada parte, importada aquí de otros componentes, que se activan con navigation.navigate. 
//DrawerContentScrollView para el menu de abajo
//se desestructura "navigation" de DrawerContentCmponentProps, luego con navigation.navigate se pasa de una pag a otra
const MenuInterno = ({navigation}: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      {/* Parte del avatar */}
      <View style={styles.avatarContaiuner}>
        <Image
          source={{
            uri: 'https://st4.depositphotos.com/14903220/22197/v/600/depositphotos_221970610-stock-illustration-abstract-sign-avatar-icon-profile.jpg',
          }}
          style={styles.avatar}
        />
      </View>
      {/* menu options */}
      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => {
            navigation.navigate('Tabs');
          }}>
          <Text style={styles.menuItem}>Navegacion</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => {
            navigation.navigate('SettingsScreen');
          }}>
          <Text style={styles.menuItem}>Settings</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};
