import React from 'react';
import { useState } from 'react';

export default function NewTodo({ addNewTodoHandler, showNewTodoForm }) {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  // handle form submit.
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title) {
      alert('Title is required !');
    } else {
      setTitle('');
      setDesc('');
      addNewTodoHandler(title, desc);
    }
  };

  return (
    <form
      className="container mb-4"
      onSubmit={handleSubmit}
      style={{ display: showNewTodoForm === true ? 'block' : 'none' }}
    >
      <div className="col-lg-6 mx-auto">
        <div className="rounded bg-light p-3 border">
          <p className="display-3 mt-0">New Todo</p>
          <div className="mb-3">
            <label html-for="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control "
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label html-for="desc" className="form-label">
              Description
            </label>
            <textarea
              className="form-control "
              id="desc"
              rows="2"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
          </div>

          <div className="d-grid gap-2">
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
