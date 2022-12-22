import React from 'react';
import Project from './Project';

export default function Projects( {data} ) {
  const projects = data.map( p => {
    return (
      <Project key={p.id} project={p} />
    )
  })

  return (
    <main role="main" className="container">

      <div className="d-flex mb-1">
        <h1 className="m-0">Projects</h1>
        <div className="ms-auto d-flex">
          <div><input type="text" className="form-control" placeholder="New project name" aria-label="Project Name"/></div>
          <div className="ms-1"><button className="btn btn-primary">Add Project</button></div>
        </div>
      </div>
      <div id="allProjectsAccordion">
        {projects}
      </div>

    </main>
  );
}