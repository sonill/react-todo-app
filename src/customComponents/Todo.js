import React from 'react';

export default function Todo({ todo }) {
  let collapse_id = 'collapse' + todo.sno;
  let heading_id = 'heading' + todo.sno;
  return (
    <>
      <div class="accordion-item">
        <h2 class="accordion-header" id={heading_id}>
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={'#' + collapse_id}
            aria-expanded="false"
            aria-controls={collapse_id}
          >
            {todo.title}
          </button>
        </h2>
        <div
          id={collapse_id}
          class="accordion-collapse collapse"
          aria-labelledby={heading_id}
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">{todo.desc}</div>
        </div>
      </div>
    </>
  );
}
