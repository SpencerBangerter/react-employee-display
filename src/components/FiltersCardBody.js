import React from "react";

function Filters(props) {
  return (
    <div>
      <form className="form">
        <div className="form-group">
          <label htmlFor="departmentFilter">Department</label>
          <select className="form-control" id="departmentFilter" onChange={props.handleInputChange}>
            <option></option>
            <option>Engineering</option>
            <option>Quality Control</option>
            <option>CDC</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="titleFilter">Title</label>
          <input onChange={props.handleInputChange} className="form-control" type="text" id="titleFilter" />
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="employmentFilter"
            onChange={props.handleInputChange}
          />
          <label htmlFor="employmentFilter">Currently Employed</label>
        </div>

        <button onClick={props.handleFormSubmit}>Apply Filters</button>
      </form>
    </div>
  );
}

export default Filters;
