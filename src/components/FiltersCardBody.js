import React from "react";

function Filters(props) {
  return (
    <div>
      <form className="form">
        <div className="form-group">
          <label htmlFor="departmentFilter">Department</label>
          <select
            className="form-control"
            id="departmentFilter"
            onChange={props.handleInputChange}
            name="department"
            value={props.department}
            >
            <option></option>
            <option value="Engineering" >Engineering</option>
            <option value="Quality Control">Quality Control</option>
            <option value="CDC">CDC</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
          onChange={props.handleInputChange}
          value={props.title}
          name="title"
          type="text"
          className="form-control"
          placeholder="Enter a title"
          id="title"
          />
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="currentlyEmployed"
            name="currentlyEmployed"
            checked={props.currentlyEmployed}
            onChange={props.handleCheckboxUpdate}
          />
          <label htmlFor="currentlyEmployed">Currently Employed</label>
        </div>

      </form>
    </div>
  );
}

export default Filters;
