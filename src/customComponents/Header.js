import React from 'react';

export default function Header() {
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
          >
            <i class="bi-plus-lg"></i>
          </button>
        </div>
      </nav>

      <form
        role="search"
        className="container mb-3 border-bottom py-2 bg-light"
      >
        <input
          type="text"
          className="form-control"
          placeholder="Search Keywords"
        />
      </form>
    </div>
  );
}
