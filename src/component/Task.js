import React from 'react';

export default function Task( props ) {
  return (
      <div id={`task${props.item.id}`} className="card text-bg-warning mt-3">
        <div className="card-header d-flex">
          <div>
            <h5>{props.item.title}</h5>
          </div>
          <div className="ms-auto">
            <button id={`close${props.id}`} type="button" className="btn-close" aria-label="Close"></button>
          </div>
        </div>
        <div className="card-body">
          <p className="card-text">{props.item.description}</p>
        </div>
      </div>
  )
}