import {StyleSheet} from 'react-native';

export const colores={
  primary:"green",

}

export const styles = StyleSheet.create({
  globalMargin: {
    marginHorizontal: 20,
  },
  title: {
    fontSize: 30,
    marginBottom: 10,
  },
  botonGRande: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },

  botonGrandeTextoo: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  avatarContaiuner: {
    alignItems: 'center',
    marginTop: 20,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  menuContainer: {
    marginVertical: 30,
    marginHorizontal: 30,
    alignItems: 'center',
  },
  menuButton: {
    margin: 20,
  },
  menuItem: {
    fontSize: 20,
  },

  botomItem:{
    borderTopWidth:0,
    marginBottom:8,
  }
});
