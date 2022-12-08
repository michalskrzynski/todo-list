//import './lists.js';
import React from 'react';
import ReactDOM from 'react-dom/client';
import NavBar from './component/NavBar';
import MainContent from './component/MainContent';
import ux from './ux.js';

import 'bootstrap';
import './style.css';

function Page() {
  return (
    <div>
      <NavBar />
      <MainContent />
    </div>
  );
}


ReactDOM.createRoot( document.getElementById('page') ).render( <Page /> );

setTimeout( () => {
  ux.addProject('Unassigned tasks');
  ux.placeNewTaskForm();
  ux.addProject('Second Project');
}, 0);


// document.getElementById('formSave').addEventListener('click', () => {

//   const title = document.getElementById('formTitle').value;
//   const description = document.getElementById('formDescription').value;
//   const data = {title, description};

//   const newItem = lists.itemFactory( data );
//   lists.getDefaultGroup().addItem( newItem );

//   ux.addNewTask( newItem );

// });