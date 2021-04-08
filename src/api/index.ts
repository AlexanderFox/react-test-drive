import { User, users } from 'fixtures';

const api = {
  getUsers: () => new Promise<User[]>(resolve => {
    setTimeout(() => resolve(users), 2000);
  })
}

export { api };
