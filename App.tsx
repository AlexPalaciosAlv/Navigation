import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
//import { StackNavigator } from './src/navigator/StackNavigator';
//import {MenuLateralBasico} from './src/navigator/MenuLateralBasico';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { StackNavigator } from './src/navigator/StackNavigator';
// import { SettingsScreen } from './src/screens/SettingsScreen';
import {MenuLateral} from './src/navigator/MenuLateral';
//import {Tabs} from './src/navigator/Tabs';
import {AuthProvider} from './src/context/AuthContext';


//NavigationContainer para poder hacer las navegaciones
//AppState es el context creado que engloba a MenuLateral
export const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        {/* <StackNavigator/>  */}
        {/* <MenuLateralBasico /> */}
        <MenuLateral />
        {/* <Tabs/> */}
      </AppState>
    </NavigationContainer>
  );
};

const AppState = ({children}: any) => {
  //esto englobara a los hijos en la propia funcion app, es el contexto
  return <AuthProvider>{children}</AuthProvider>;
};

// const Drawer = createDrawerNavigator();

// export const MenuLateralBasico = () => {
//   return (
//     <Drawer.Navigator>
//       <Drawer.Screen name="StackNavigator" component={StackNavigator} />
//       <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
//     </Drawer.Navigator>
//   );
// };
