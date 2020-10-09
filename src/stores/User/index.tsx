import React, { createContext, FC, useState } from 'react';
import { getUserData } from '../../api';

export const UserContext = createContext<any>({});

type MyProps = {
  children: React.ReactNode
}

export const UserProvider: React.FC<MyProps> = ({ children }) => {
  const [userData, setUserData] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const getUserInfo = async () => {
    setLoading(true);
    const info = await getUserData();
    setUserData(info);
    setLoading(false);
  };

  return <UserContext.Provider value={{ loading, userData, getUserInfo }}>{children}</UserContext.Provider>;
};