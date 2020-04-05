import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Card from "./Card";
import EmployeeCardBody from "./EmployeeCardBody";
import FiltersCardBody from "./FiltersCardBody";

import employees from "../employees.json";

class EmployeeContainer extends Component {
  state = {
    employees,
    filters: {
      currentlyEmployed: true,
      department: "Quality Control",
      title: "QC Analyst",
    }
  };

    handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
    
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    alert('Button push')
  };

  //render base component
  render() {
    return (
      <Container>
        <Row>
          <Col size="md-5">
            <Card heading="Employees">
              <EmployeeCardBody 
              employees = {employees}
              filters = {this.state.filters}
              />
            </Card>
          </Col>
          <Col size="md-6">
            <Card heading="Filters">
              <FiltersCardBody 
              handleFormSubmit={this.handleFormSubmit}
              />
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default EmployeeContainer;
// {this.state.employees.map((employee) => (
//   <EmployeeCardBody 
//     id={employee.id}
//     key={employee.id}
//     name={employee.name}
//     title={employee.title}
//     department={employee.department}
//     filters={this.state.filters}
//   />
// ))
// }
