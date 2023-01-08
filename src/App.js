import React from "react";
import ReactBlog from "./coding_apple/ReactBlog";
import "./coding_apple/ReactBlog.css";

import "bootstrap/dist/css/bootstrap.min.css";

import { Navbar, Container, Nav, Col, Row } from "react-bootstrap";

const App = () => {
  return (
    <div>
      <ReactBlog />
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Gan-Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#cart">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="main-bg"></div>
      <Container>
        <Row>
          <Col>
          <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="80%"/>
          <h4>상품명</h4>
          <h4>상품설명</h4>
          </Col>
          <Col>
          <img src="https://codingapple1.github.io/shop/shoes2.jpg" width="80%"/>
          <h4>상품명</h4>
          <h4>상품설명</h4>
          </Col>
          <Col>
          <img src="https://codingapple1.github.io/shop/shoes3.jpg" width="80%"/>
          <h4>상품명</h4>
          <h4>상품설명</h4>
          </Col> </Row>
      </Container>
    </div>
  );
};

export default App;
