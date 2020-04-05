import React from "react";

function EmployeeCard(props) {
  return (
    <div className="card">
      <div className="content">
         <div>
            <strong>Name:</strong> {props.name}
          </div>
         <div>
            <strong>Department:</strong> {props.department}
          </div>
         <div>
            <strong>Title:</strong> {props.title}
          </div>
      </div>
    </div>
  );
}

export default EmployeeCard;
