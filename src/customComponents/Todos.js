import React from 'react';
import Todo from './Todo.js';

export default function Todos({ todos }) {
  return (
    <div className="container">
      <div class="accordion ">
        {todos.map((todo) => (
          <Todo todo={todo} />
        ))}
      </div>
    </div>
  );
}
