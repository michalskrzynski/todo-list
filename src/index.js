import './lists.js';
import './ux.js';

import 'bootstrap';
import './style.css';


ux.addProject('Unassigned tasks');
ux.placeNewTaskForm();
ux.addProject('Second Project');


document.getElementById('formSave').addEventListener('click', () => {

  const title = document.getElementById('formTitle').value;
  const description = document.getElementById('formDescription').value;
  const data = {title, description};

  const newItem = lists.itemFactory( data );
  lists.getDefaultGroup().addItem( newItem );

  ux.addNewTask( newItem );

});