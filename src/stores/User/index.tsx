import React, { createContext, FC, useState } from 'react';
import { getUserData } from '../../api';

export const UserContext = createContext<any>({});

type MyProps = {
  children: React.ReactNode
}

export const UserProvider: React.FC<MyProps> = ({ children }) => {
  const [username, setUsername] = useState('Leonardo');

  const changeNameByAPI = async () => {
    setUsername('Loading...');
    const name = await getUserData();
    setUsername(name);
  };

  return <UserContext.Provider value={{ username, changeNameByAPI }}>{children}</UserContext.Provider>;
};