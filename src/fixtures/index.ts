export type User = {
  id: number;
  name: string;
  salary: number;
  email?: string;
}

const users: User[] = [
  { id: 1, name: 'Alex', salary: 1000 },
  { id: 2, name: 'Den', salary: 2000 },
  { id: 3, name: 'Abramov', salary: 3000 },
];

export { users };
