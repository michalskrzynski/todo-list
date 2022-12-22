import React from "react";
import priorities from "../util/priorities"

export default function NewTaskModal(props) {
  
  let renderedOptions = priorities().renderOptions();

  let [formData, setFormData] = React.useState({
    title: "",
    description: "",
    priority: "normal"
  });

  const handleSave = () => props.handleSave( formData );

  const handleChange = (e) => {
    const { name, value } = e.target;

    console.log(name, value);

    setFormData( prevData => ({
      ...prevData,
      [name]: value,
    }) );
  }

  return (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target={`#newTaskProject${props.projectId}`}
      >
        Add new task
      </button>

      <div
        className="modal fade"
        id={`newTaskProject${props.projectId}`}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <form>
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Type in task details
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-4">
                    <label htmlFor="title">Task title:</label>
                  </div>
                  <div className="col-8">
                    <input
                      className="w-100"
                      type="text"
                      name="title"
                      placeholder="eg. Buy eggs"
                      value={formData.title}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="row pt-2">
                  <div className="col-4">
                    <label htmlFor="description">Task description:</label>
                  </div>
                  <div className="col-8">
                    <textarea
                      className="w-100"
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="row pt-2">
                  <div className="col-4">
                    <label htmlFor="priority">Task priority:</label>
                  </div>
                  <div className="col-8">
                    <select
                      className="w-100"
                      name="priority"
                      value={formData.priority}
                      onChange={handleChange}
                    >
                      {priorities().renderOptions()}
                    </select>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  onClick={handleSave}
                  type="button"
                  className="btn btn-primary"
                >
                  Save changes
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
