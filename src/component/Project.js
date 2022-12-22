import React from "react";
import Task from './Task';
import NewTaskModal from './NewTaskModal'


export default function Project( props ) {

  let [items, setItems] = React.useState( props.project.items );
  let [unsavedId, setUnsavedId] = React.useState( 1 ); 

  const handleDelete = ( id ) => {
    setItems( prevList => prevList.filter( it => it.id !== id ) );
  }


  const handleSave = ( formData ) => {
    let data = {...formData}
    data.id = 'unsaved_' + unsavedId;
    setUnsavedId( prevId => prevId+1 );
    setItems( prevList => [data, ...prevList] );
  }

  
  const tasksContent = () => {
    return ( !Array.isArray( items ) || !items.length > 0 ) ?
      `The project's list is currently empty.` : items.map( i => <Task 
        key={i.id} 
        item={i} 
        handleDelete={ () => handleDelete(i.id) } 
        /> 
      );
  }


  return (
      <div className="accordion">
        
        <h2 className="accordion-header d-flex" id={`panelsStayOpen-heading-${props.project.id}`}>
          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={"#panelsStayOpen-collapse-" + props.project.id} aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
            {props.project.name}
          </button>
        </h2>
        <div id={"panelsStayOpen-collapse-" + props.project.id} className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
          <div className="accordion-body">
            <NewTaskModal projectId={props.project.id} handleSave={handleSave} />
            {tasksContent()}
          </div>
        </div>
      </div>
  )
}