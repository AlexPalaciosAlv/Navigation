import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {styles} from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {TouchableIcon} from '../components/touchableIcon';


//iconos touchable
export const Tab1Screen = () => {
  const {top} = useSafeAreaInsets();

  useEffect(() => {
    console.log('tab1');
  }, []);

  return (
    <View style={{...styles.globalMargin, marginTop: top + 10}}>
      <Text style={styles.title}>Iconos</Text>
      <Text>
        <TouchableIcon iconName="rocket" />
        <TouchableIcon iconName="add-circle-outline" />
        <TouchableIcon iconName="aperture-outline" />
        <TouchableIcon iconName="boat-outline" />
      </Text>
    </View>
  );
};
