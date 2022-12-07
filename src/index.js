import './lists.js';
// import 'react';
// import 'react-dom';
import './ux.js';

import 'bootstrap';
import './style.css';

// const NavBar = () => {
//   return <h1>AAAAA</h1>;
//   // return 
//   // <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
//   //   <a className="navbar-brand" href="#">Navbar</a>
//   //   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
//   //     <span className="navbar-toggler-icon"></span>
//   //   </button>

//   //   <div className="collapse navbar-collapse" id="navbarsExampleDefault">
//   //     <ul className="navbar-nav mr-auto">
//   //       <li className="nav-item active">
//   //         <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
//   //       </li>
//   //       <li className="nav-item">
//   //         <a className="nav-link" href="#">Link</a>
//   //       </li>
//   //       <li className="nav-item">
//   //         <a className="nav-link disabled" href="#">Disabled</a>
//   //       </li>
//   //       <li className="nav-item dropdown">
//   //         <a className="nav-link dropdown-toggle" href="http://example.com" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
//   //         <div className="dropdown-menu" aria-labelledby="dropdown01">
//   //           <a className="dropdown-item" href="#">Action</a>
//   //           <a className="dropdown-item" href="#">Another action</a>
//   //           <a className="dropdown-item" href="#">Something else here</a>
//   //         </div>
//   //       </li>
//   //     </ul>
//   //   </div>
//   // </nav>
// }

// const MainContainer = () => {
//   return 
//     <main role="main" className="container">

//       <div className="d-flex mb-1">
//         <h1 className="m-0">Projects</h1>
//         <div className="ms-auto d-flex">
//           <div><input type="text" className="form-control" placeholder="New project name" aria-label="Project Name"/></div>
//           <div className="ms-1"><button className="btn btn-primary">Add Project</button></div>
//         </div>
//       </div>
//       <div className="accordion" id="allProjectsAccordion">
//       </div>

//     </main>
// }

// ReactDOM.render( <h1>CCCC</h1>, document.getElementById('root'));
//ReactDOM.render( <MainContainer />, document.getElementById('root'));

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