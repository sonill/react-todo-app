import React from 'react';
import { useState } from 'react';

import Header from './customComponents/Header.js';
import Todos from './customComponents/Todos.js';
import NewTodo from './customComponents/NewTodo.js';

export default function App() {
  const [todos, setTodos] = useState([]);
  const deleteTodo = () => {
    console.log('onDelete');
  };

  const [showNewTodoForm, setShowNewTodoForm] = useState(false);

  const addNewTodo = (title, desc) => {
    let new_sno = todos.length > 0 ? todos[todos.length - 1].sno + 1 : 1;
    let newData = {
      sno: new_sno,
      title: title,
      desc: desc,
    };

    setTodos([...todos, newData]);

    setShowNewTodoForm(!showNewTodoForm);
  };

  return (
    <>
      <Header
        setShowNewTodoForm={setShowNewTodoForm}
        showNewTodoForm={showNewTodoForm}
      />
      <NewTodo
        addNewTodoHandler={addNewTodo}
        showNewTodoForm={showNewTodoForm}
        setShowNewTodoForm={setShowNewTodoForm}
      />
      <Todos todos={todos} onDelete={deleteTodo} />
    </>
  );
}
