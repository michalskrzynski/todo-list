import React from "react";
import Task from './Task';


export default function Project( props ) {
  let tasks = '';
  let items = props.project.items;

  if( !Array.isArray( items ) || !items.length > 0 ) 
    tasks = 'Project tasks will appear here.';
  else {
    tasks = items.map( i => <Task key={i.id} item={i} /> );
  }

  return (
      <div className="accordion">
        <h2 className="accordion-header" id={`panelsStayOpen-heading-${props.project.id}`}>
        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={"#panelsStayOpen-collapse-" + props.project.id} aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
            {props.project.name}
          </button>
        </h2>
        <div id={"panelsStayOpen-collapse-" + props.project.id} className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
          <div className="accordion-body">
            {tasks}
          </div>
        </div>
      </div>
  )
}