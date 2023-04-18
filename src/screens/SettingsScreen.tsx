import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {AuthContext} from '../context/AuthContext';
import Icon from 'react-native-vector-icons/Ionicons';

export const SettingsScreen = () => {
  const insets = useSafeAreaInsets(); //hool para centrar el contenido

  const {authState} = useContext(AuthContext); //en authstate esta la info del estado

  return (
    <View style={{marginTop: insets.top + 20}}>
      <Text>SettingsScreen</Text>
      <Text>{JSON.stringify(authState, null, 4)}</Text>
      {authState.favouriteIcon && (
        <Icon name={authState.favouriteIcon} size={150} color={'green'} />
      )}
    </View>
  );
};
