import React from "react";
import prioritiesFactory from "../util/priorities";

export default function Task(props) {
  let priorities = prioritiesFactory();
  let style = priorities.describe( props.item.priority );

  return (
    <div
      id={`task${props.item.id}`}
      className={`card border-${style} text-${style} mt-2`}
    >
      <div className="card-header d-flex pb-1">
        <div>
          <h5>{props.item.title}</h5>
        </div>
        <div className="ms-auto">
          <button
            id={`close${props.item.id}`}
            onClick={props.handleDelete}
            type="button"
            className="btn-close"
            aria-label="Close"
          ></button>
        </div>
      </div>
      <div className="card-body">
        <p className="card-text">{props.item.description}</p>
      </div>
    </div>
  );
}
