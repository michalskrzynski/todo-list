const ux = (() => {

  let _id = 0;
  const uniqueId = () => {
    return ++_id;
  }

  let accordionPanel = null; 


  const placeNewTaskForm = () => {
    const firstAccordionSegment = document.querySelector('.accordion-body');
    firstAccordionSegment.innerText = '';

    const tpl = 
      ` <div class="col-6 mx-auto">
          <div class="card">
            <div class="card-header d-flex">
              <div><h4 class="m-0">Add new task</h4></div>
              <div class="ms-auto"><button id="formSave" class="btn btn-success btn-sm">Save</button></div>
            </div>
            <div class="row pt-2 ps-2 pe-2">
              <div class="col">
                <div class="input-group">
                  <span class="input-group-text">Title</span>
                  <input id="formTitle" type="text" class="form-control" placeholder="eg. Send Christmas Wishes" aria-label="Task Title">
                </div>
              </div>
            </div>
            <div class="row p-2">
              <div class="col"> 
                <div class="input-group">
                  <span class="input-group-text">Description</span>
                  <textarea id="formDescription" class="form-control" aria-label="With textarea"></textarea>
                </div>
              </div>
            </div>
            <div class="row ps-2 pe-2">
              <div class="col-4">Priority</div>
              <div class="col-2">
                <div class="p-3 mb-3 bg-danger rounded text-white text-center">3</div>
              </div>
              <div class="col-2">
                <div class="p-3 mb-3 bg-warning rounded text-dark text-center">2</div>
              </div>
              <div class="col-2">
                <div class="p-3 mb-3 bg-secondary rounded text-white text-center">1</div>
              </div>
              <div class="col-2">
                <div class="p-3 mb-3 bg-light rounded text-dark text-center">0</div>
              </div>
            </div>
          </div>
        </div>`;

    const newElem = document.createElement('div');
    newElem.innerHTML = tpl;
    firstAccordionSegment.appendChild( newElem );
  } 



  const addNewTask = ( listItem ) => {
    const tpl = 
    ` <div id="task${listItem.id}" class="card text-bg-warning mt-3">
        <div class="card-header d-flex">
          <div>
            <h5>${listItem.data.title}</h5>
          </div>
          <div class="ms-auto">
            <button id="close${listItem.id}" type="button" class="btn-close" aria-label="Close"></button>
          </div>
        </div>
        <div class="card-body">
          <p class="card-text">${listItem.data.description}</p>
        </div>
      </div>`;

    const newElem = document.createElement('div');
    newElem.innerHTML = tpl;

    const firstAccordionSegment = document.querySelector('.accordion-body');
    firstAccordionSegment.appendChild( newElem );
  } 

  return {
    addProject,
    addNewTask,
    placeNewTaskForm
  }

})();

export default ux;