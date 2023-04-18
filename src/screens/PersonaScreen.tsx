import React, {useContext, useEffect} from 'react';
import {Text, View} from 'react-native';
import {styles} from '../theme/appTheme';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../navigator/StackNavigator';
import {AuthContext} from '../context/AuthContext';

// interface RouterPatams{
//     id:number,
//     nombre:string
// }

interface Props extends StackScreenProps<RootStackParams, 'PersonaScreen'> {}

export const PersonaScreen = ({route, navigation}: Props) => {
  //   const params= route.params as RouterParams;
  const params = route.params;
  const {changeUserName} = useContext(AuthContext); //llamamos al context para ejecutar la accion que fija el userName

  useEffect(() => {
    navigation.setOptions({
      title: params.nombre,
    });
  }, []);

  useEffect(() => {
    //disparamos este efecto paa que el nombre del parámetro (pedro o maría) se quede fijado en settings, esto se fija en el context(AuthContex), que se refleja en SettingsScreen
    changeUserName(params.nombre);
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>PersonaScreen</Text>
      <Text>{JSON.stringify(params, null, 3)}</Text>
    </View>
  );
};
