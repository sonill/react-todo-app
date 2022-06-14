import React from 'react';
import { useState } from 'react';

import Header from './customComponents/Header.js';
import Todos from './customComponents/Todos.js';
import NewTodo from './customComponents/NewTodo.js';

export default function App() {
  const [todos, setTodos] = useState(() => [
    {
      sno: 1,
      title: 'something',
      desc: 'This is desc',
    },
    {
      sno: 2,
      title: 'something',
      desc: 'This is desc',
    },
  ]);

  return (
    <>
      <Header />
      <NewTodo />
      <Todos todos={todos} />
    </>
  );
}
