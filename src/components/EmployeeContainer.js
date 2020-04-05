import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Card from "./Card";
import EmployeeCardBody from "./EmployeeCardBody";
import employees from "../employees.json";

class EmployeeContainer extends Component {
  state = {};

  //render base component
  render() {
    return (
      <Container>
        <Row>
          <Col size="md-5">
            <Card heading="Employees">
              {employees.map((employee) => (
                <EmployeeCardBody
                  id={employee.id}
                  key={employee.id}
                  name={employee.name}
                  title={employee.title}
                  department={employee.department}
                />
              ))}
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
