import {AuthState} from './AuthContext';

//reducer cambia el estado

type AuthAction = //objeto con el tipo signIn, out, y tipo cha gefavicon, authaction tiene dos types

    | {type: 'signIn'}
    | {type: 'logOut'}
    | {type: 'changeFavIcon'; payload: string}
    | {type: 'changeUserName'; payload: string};

//se hace en archivo aparte del authcontext, se importa el AuthState
//basado en la accion que recibimos se genera un nuevo estado
//recibe una accion ( x ejemplo login) y se regresa un estado diferente
export const authReducer = (
  state: AuthState,
  action: AuthAction,
): AuthState => {
  switch (action.type) {
    case 'signIn': //solo coge este tipo, que es el de AuthAction
      return {...state, isLoggedIn: true, userName: 'no username yet'};
    case 'changeFavIcon':
      return {...state, favouriteIcon: action.payload};
    case 'logOut':
      return {
        ...state,
        isLoggedIn: false,
        userName: undefined,
        favouriteIcon: undefined,
      };
    case 'changeUserName':
      return {...state, userName: action.payload};
    default:
      return state;
  }
};
