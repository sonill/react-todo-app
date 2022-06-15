import React from 'react';
import Todo from './Todo.js';

export default function Todos({ todos }) {
  return (
    <div className="container">
      <div className="col-lg-6 mx-auto">
        <div className="accordion ">
          {todos
            .slice(0)
            .reverse()
            .map((todo) => (
              <Todo key={todo.sno} todo={todo} />
            ))}
        </div>
      </div>
    </div>
  );
}
