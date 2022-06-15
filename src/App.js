import React from 'react';
import { useState, useEffect } from 'react';

import Header from './customComponents/Header.js';
import Todos from './customComponents/Todos.js';
import NewTodo from './customComponents/NewTodo.js';

export default function App() {
  const [todos, setTodos] = useState(() => {
    // get data from localstorage, if it exists.
    if (localStorage.getItem('todos')) {
      return JSON.parse(localStorage.getItem('todos'));
    } else {
      return [];
    }
  });

  // delete selected todo.
  const deleteTodo = (todo) => {
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
  };

  // search / filter todos
  const filterTodos = (keyword) => {};

  const [showNewTodoForm, setShowNewTodoForm] = useState(false);

  // add new todo.
  const addNewTodo = (title, desc) => {
    let new_sno = todos.length > 0 ? todos[todos.length - 1].sno + 1 : 1;
    let newData = {
      sno: new_sno,
      title: title,
      desc: desc,
    };

    setTodos([...todos, newData]);

    // show hide new todo form.
    setShowNewTodoForm(!showNewTodoForm);
  };

  // useEffect runs when todos is updated.
  useEffect(() => {
    // update local storage.
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

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
