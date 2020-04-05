import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Card from "./Card";
import EmployeeCardBody from "./EmployeeCardBody";
import employees from "../employees.json";

class EmployeeContainer extends Component {
  state = {
    employees,
    filters: {
      currentlyEmployed: true,
      department: "Engineering",
      title: 'Senior Developer',
    }
  };

  // currentlyEmployed = x => {
  //   if (!this.props.filters.currentlyEmployed) {
  //     console.log(this.props.filters.currentlyEmployed)
  //     // const employees = this.state.employees.filter(employee => employee.currentlyEmployed === true)
  //     // this.setState({ employees });
  //   }
  // }

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
            <Card heading="Filters"></Card>
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
