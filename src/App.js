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

  const addNewTodo = (title, desc) => {
    let new_sno = todos[todos.length - 1].sno + 1;
    let newData = [
      {
        sno: new_sno,
        title: title,
        desc: desc,
      },
    ];

    setTodos([...todos, newData]);
  };

  return (
    <>
      <Header />
      <NewTodo addNewTodo={addNewTodo} />
      <Todos todos={todos} />
    </>
  );
}
