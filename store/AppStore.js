import React, {createContext, useReducer, useContext} from 'react';
import AppReducer from './AppReducer';

const initialAppState = {
  isAuthenticated: false,
  currentUser: null,
};

const AppContext = createContext(initialAppState);

const AppStore = ({children}) => {
  const [state, dispatch] = useReducer(AppReducer, initialAppState);
  return (
    <AppContext.Provider value={[state, dispatch]}>
      {children}
    </AppContext.Provider>
  );
};

const useAppStore = () => useContext(AppContext);

export {AppStore as default, AppStore, AppContext, useAppStore};
