import React from "react";

function EmployeeCard(props) {
  let renderedEmployees = props.employees
  if (props.filters.currentlyEmployed || !props.filters.currentlyEmployed) {
    renderedEmployees = renderedEmployees.filter(employee => employee.currentlyEmployed === props.filters.currentlyEmployed);
  }
  if (props.filters.department) {
    renderedEmployees = renderedEmployees.filter(employee => employee.department === props.filters.department);
  }
  if (props.filters.title) {
    renderedEmployees = renderedEmployees.filter(employee => employee.title === props.filters.title);
  }
  console.log(renderedEmployees)
  return (
    <div>
      {renderedEmployees.map(employee => (
        <div className="card" key={employee.id}>
        <div className="content">
        <div>
           <strong>Name:</strong> {employee.name}
         </div>
        <div>
           <strong>Department:</strong> {employee.department}
         </div>
        <div>
           <strong>Title:</strong> {employee.title}
         </div>
     </div>
     </div>

      ))}
    </div>
  );
}

export default EmployeeCard;
