import React from 'react';
import Todo from './Todo.js';

export default function Todos({ todos }) {
  console.log(todos);
  return (
    <div className="container">
      {todos.map((todo) => (
        <Todo />
      ))}
    </div>
  );
}
