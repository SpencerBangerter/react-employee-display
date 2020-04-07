import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Card from "./Card";
import EmployeeCardBody from "./EmployeeCardBody";ft
import FiltersCardBody from "./FiltersCardBody";

import employees from "../employees.json";

class EmployeeContainer extends Component {
  state = {
    currentlyEmployed: true,
    department: "",
    title: "",
  };

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  handleCheckboxUpdate = event => {
    const name = event.target.name;
    const value = event.target.checked;
    this.setState({
      [name]: value
  })};

  //render base component
  render() {
    return (
      <Container>
        <Row>
          <Col size="md-5">
            <Card heading="Employees">
              <EmployeeCardBody 
              employees = {employees}
              filters = {this.state}
              />
            </Card>
          </Col>
          <Col size="md-6">
            <Card heading="Filters">
              <FiltersCardBody 
              title={this.state.title}
              currentlyEmployed={this.state.currentlyEmployed}
              department={this.state.department}
              handleInputChange={this.handleInputChange}
              handleCheckboxUpdate={this.handleCheckboxUpdate}
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
