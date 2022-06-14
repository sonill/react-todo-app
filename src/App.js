import React from 'react';
import { useState } from 'react';

import Header from './customComponents/Header.js';
import Todos from './customComponents/Todos.js';

export default function App() {
  const [todos, setTodos] = useState(() => [
    {
      sno: 1,
      title: 'something',
    },
  ]);

  return (
    <>
      <Header />
      <Todos todos={todos} />
    </>
  );
}
