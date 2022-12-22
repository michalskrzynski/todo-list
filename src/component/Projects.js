import React from 'react';
import NewProjectForm from './NewProjectForm';
import Project from './Project';

export default function Projects( props ) {
  
  let [unsavedId, setUnsavedId] = React.useState( 1 );
  let [data, setData] = React.useState( props.data );

  const projects = data.map( p => {
    return (
      <Project key={p.id} project={p} />
    )
  })

  const handleSave = (formData) => {
    setData( prevData => ([
        {id: unsavedId, name: formData.name, items: []},
        ...prevData
      ]
    ));

    setUnsavedId( oldId => oldId+1 );
  }

  return (
    <main role="main" className="container">

      <div className="d-flex mb-1">
        <h1 className="m-0">Projects</h1>
        <NewProjectForm handleSave={handleSave}/>
      </div>
      <div id="allProjectsAccordion">
        {projects}
      </div>

    </main>
  );
}