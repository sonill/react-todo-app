import React from 'react';

export default function NewTodo({ todo }) {
  const addNewTodo = () => {};

  return (
    <form class="container mb-4" onSubmit={addNewTodo}>
      <div className="col-lg-6 mx-auto">
        <div className="rounded bg-light p-3 border">
          <p className="display-3 mt-0">New Todo</p>
          <div class="mb-3">
            <label for="title" class="form-label">
              Title
            </label>
            <input type="text" class="form-control " id="title" />
          </div>
          <div class="mb-3">
            <label for="desc" class="form-label">
              Description
            </label>
            <textarea class="form-control " id="desc" rows="3"></textarea>
          </div>

          <div class="d-grid gap-2">
            <button class="btn btn-primary" type="button">
              Submit
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
