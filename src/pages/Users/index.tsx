import { useCallback, useContext, useEffect, useState } from 'react';
import { api } from 'api';
import { User } from 'fixtures';
import classes from './style.module.css';
import { AppContext } from 'providers/App';


const UserComponent = (props: User) => {
  return <div className={classes.listItem}>
    <div className={classes.item}>{ props.name }</div>
    <div className={classes.item}>{ props.email }</div>
    <div style={{ padding: '10px 10px' }}>{ props.salary }</div>
  </div>
}

const Users = () => {
  const { users, reverse } = useContext(AppContext);

  // const sort = useCallback(() => {
  //   setUsers(users => [...users.reverse()]);
  // }, [setUsers]);

  console.log('USERS', users);

  return (
    <div>
      { users
        .map(user => <UserComponent key={user.id} {...user} /> ) }
      <button onClick={reverse}>SORT</button>
    </div>
  )
}

export { Users };
