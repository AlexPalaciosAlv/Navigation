import React, {useContext} from 'react';
import {View, Text, Button} from 'react-native';
import {styles} from '../theme/appTheme';
import {AuthContext} from '../context/AuthContext';

export const Contacts = () => {
  const {signIn, logOut, authState} = useContext(AuthContext); //isloggedin usar ahora
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Contacts-Log</Text>
      {!authState.isLoggedIn ? (
        <Button title="SignIn" onPress={signIn} />
      ) : (
        <Button title="logOut" onPress={logOut} />
      )}
    </View>
  );
};
