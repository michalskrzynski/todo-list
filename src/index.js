//import './lists.js';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './component/App';
import Project from './component/Project';

import 'bootstrap';
import './style.css';


const appElement = document.getElementById('app');
ReactDOM.createRoot( appElement ).render( <App /> );

// setTimeout( () => {
//   const accordionPanel = document.getElementById( 'allProjectsAccordion' );
//   ReactDOM.createRoot( accordionPanel ).render( <Project id="1" name="Unassigned Tasks" /> );  
// }, 0);



// document.getElementById('formSave').addEventListener('click', () => {

//   const title = document.getElementById('formTitle').value;
//   const description = document.getElementById('formDescription').value;
//   const data = {title, description};

//   const newItem = lists.itemFactory( data );
//   lists.getDefaultGroup().addItem( newItem );

//   ux.addNewTask( newItem );

// });