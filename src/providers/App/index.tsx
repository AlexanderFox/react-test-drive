import { createContext, FC, useCallback, useEffect, useState } from 'react';
import { User } from 'fixtures';
import { api } from 'api';

type Context = {
  users: User[];
  reverse: () => void;
}

export const AppContext = createContext<Context>({} as Context);

export const AppProvider: FC = ({ children }) => {
  const [ users, setUsers ] = useState<User[]>([]);

  useEffect(() => {
    let alive = true;
    api.getUsers().then(v => {
      console.log('USERS', v);
      if (alive) setUsers(v);
    });
    return () => {
      alive = false;
    }
  },[]);

  const reverse = useCallback(() => {
    setUsers([...users.reverse()]);
  }, [setUsers, users]);

  console.log('USERS-CONTEXT', users);

  return <AppContext.Provider value={{ users, reverse }}>
    { children }
  </AppContext.Provider>
}
