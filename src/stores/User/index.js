import React, { createContext } from 'react';
import { getUserData } from '../../api';

export const UserContext = createContext({});

export const UserProvider: = ({ children }) => {
  const changeNameByAPI = async () => {
    setUsername('Loading...');
    const name = await getUserData();
    setUsername(name);
  };

  return <UserContext.Provider value={{ changeNameByAPI }}>{children}</UserContext.Provider>;
};

