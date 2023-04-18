import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Text, View, Button} from 'react-native';
import {styles} from '../theme/appTheme';

export const Pag2Screen = () => {
  const navigator: any = useNavigation();
  useEffect(() => {
    navigator.setOptions({
      title: 'holamundo',
    });
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pag2Screen</Text>
      <Button
        title="Ir pag 3"
        onPress={() => {
          navigator.navigate('Pag3Screen');
        }}
      />
    </View>
  );
};
