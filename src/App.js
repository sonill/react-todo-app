import React from 'react';
import { useState, useEffect } from 'react';

import Header from './customComponents/Header.js';
import Todos from './customComponents/Todos.js';
import NewTodo from './customComponents/NewTodo.js';

export default function App() {
  const [doFilter, setDoFilterMode] = useState(false);

  const getTodosFromLocalStorage = () => {
    if (localStorage.getItem('todos')) {
      return JSON.parse(localStorage.getItem('todos'));
    } else {
      return [];
    }
  };

  const [todos, setTodos] = useState(() => {
    // get data from localstorage, if it exists.
    return getTodosFromLocalStorage();
  });

  // delete selected todo.
  const deleteTodo = (todo) => {
    // turn filter mode off.
    setDoFilterMode(false);

    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
  };

  // search / filter todos
  const filterTodos = (keyword) => {
    // turn filter mode on.
    setDoFilterMode(true);

    if (keyword.length < 1) {
      setTodos(getTodosFromLocalStorage());
    } else {
      setTodos(
        todos.filter((todo) => {
          if (todo.title.toLowerCase().includes(keyword.toLowerCase())) {
            return todo;
          }
        })
      );
    }
  };

  const [showNewTodoForm, setShowNewTodoForm] = useState(false);

  // add new todo.
  const addNewTodo = (title, desc) => {
    // turn filter mode off.
    setDoFilterMode(false);

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
    // don't update localstorage if filter mode is on.
    if (!doFilter) {
      // update local storage.
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  }, [todos]);

  return (
    <>
      <Header
        setShowNewTodoForm={setShowNewTodoForm}
        showNewTodoForm={showNewTodoForm}
        filterTodos={filterTodos}
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
