//definir que informacion habrá aqui

import {createContext, useReducer} from 'react';
import {authReducer} from './authReducer';

export interface AuthState {
  isLoggedIn: boolean;
  userName?: string;
  favouriteIcon?: string;
}

//estado imicial, estasdo cuando se lanza la app

export const authInitialState: AuthState = {
  isLoggedIn: false,
  userName: undefined,
  favouriteIcon: undefined,
};

//context que lo usaremos abajo para decirle a react como luce y que expone el context
export interface AuthContextProps {
  authState: AuthState;
  signIn: () => void;
  logOut: () => void;
  changeFavoriteIcon: (iconName: string) => void;
  changeUserName: (userName: string) => void;
}

//crear el contexto
export const AuthContext = createContext({} as AuthContextProps); //se define un context y se introcuce en los () de createcontext(que se eimporta de react)

//exponer proveedor de informacion. componente proveedor del estado

export const AuthProvider = ({children}: any) => {
  //se llama al authreducer creado en otro fichero
  const [authState, dispatch] = useReducer(authReducer, authInitialState); //mantiene y cambia el estado, es como el useState pero para casos más complejos. Dispatch cambia el authState

  const signIn = () => {
    dispatch({type: 'signIn'}); //accion que dispara el evento, al estar vinculada a authReducer solo acepta type "signIn"
  };

  const changeFavoriteIcon = (iconName: string) => {
    dispatch({type: 'changeFavIcon', payload: iconName});
  };

  const logOut = () => {
    dispatch({type: 'logOut'}); //accion que dispara el evento logOut
  };

  const changeUserName = (userName: string) => {
    dispatch({type: 'changeUserName', payload: userName});
  };
  return (
    <AuthContext.Provider
      value={{authState, signIn, changeFavoriteIcon, logOut, changeUserName}}>
      {children}
    </AuthContext.Provider>
  );
};
