import React from "react";

export default function NewProjectForm(props) {
  let [formData, setFormData] = React.useState({ name: "" });

  const handleChange = (e) => {
    let { name, value } = e.target;

    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    props.handleSave(formData);
  };

  return (
    <form className="ms-auto">
      <div className="ms-auto d-flex">
        <div>
          <input
            type="text"
            className="form-control"
            name="name"
            value={props.name}
            onChange={handleChange}
            placeholder="New project name"
            aria-label="Project Name"
          />
        </div>
        <div className="ms-1">
          <button onClick={handleSave} className="btn btn-primary">
            Add Project
          </button>
        </div>
      </div>
    </form>
  );
}
