import React, {useEffect} from 'react';
import {Button, Text, View, TouchableOpacity} from 'react-native';
//import {StackScreenProps} from '@react-navigation/stack';
import {styles} from '../theme/appTheme';
import {DrawerScreenProps} from '@react-navigation/drawer';

//pagina ppal del stack
interface Props extends DrawerScreenProps<any, any> {}
export const Pag1Screen = ({navigation}: Props) => {
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Button
          title="Menu"
          onPress={() => {
            navigation.toggleDrawer();
          }}
        />
      ),
    });
  }, []);

  return (
    <View style={styles.globalMargin}>
      {/* navegación a pag 2 */}
      <Text style={styles.title}>Pag1Screen</Text>
      <Button
        title="ir pag 2"
        onPress={() => {
          navigation.navigate('Pag2Screen');
        }}
      />
      <Text style={{marginVertical: 20, fontSize: 18, marginLeft: 5}}>
        Navegar con argumentos
      </Text>
      {/* botones de usuarios */}
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={{...styles.botonGRande, backgroundColor: 'green'}}
          onPress={() =>
            navigation.navigate('PersonaScreen', {id: 1, nombre: 'Pedro'})
          }>
          <Text style={styles.botonGrandeTextoo}>Pedro</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.botonGRande}
          onPress={() =>
            navigation.navigate('PersonaScreen', {id: 2, nombre: 'Maria'})
          }>
          <Text style={styles.botonGrandeTextoo}>Maria</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
