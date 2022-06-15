import React from 'react';
import Todo from './Todo.js';

export default function Todos({ todos, onDelete }) {
  return (
    <div className="container-fluid">
      <div className="accordion ">
        {todos
          .slice(0)
          .reverse()
          .map((todo) => (
            <Todo key={todo.sno} todo={todo} onDelete={onDelete} />
          ))}
      </div>
    </div>
  );
}
