import React from 'react';
import { useState } from 'react';

export default function Header({
  showNewTodoForm,
  setShowNewTodoForm,
  filterTodos,
}) {
  const [keywords, setKeywords] = useState('');

  const do_filter = (e) => {
    setKeywords(e.target.value);

    filterTodos(e.target.value);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-primary navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#" title="Go to Home">
            To Do List
          </a>
          <button
            id="add-todo"
            className="btn btn-warning btn-sm"
            type="button"
            title="Add New Todo"
            onClick={() => setShowNewTodoForm(!showNewTodoForm)}
          >
            <i className="bi-plus-lg"></i>
          </button>
        </div>
      </nav>

      <form
        role="search"
        className="container-fluid mb-3 border-bottom py-2 bg-light"
      >
        <input
          type="text"
          className="form-control"
          placeholder="Search Keywords"
          value={keywords}
          onChange={do_filter}
        />
      </form>
    </div>
  );
}
