import React, { useState } from "react";
import ReactBlog from "./coding_apple/ReactBlog";
import "./coding_apple/ReactBlog.css";
import data from "./coding_apple/data";

import "bootstrap/dist/css/bootstrap.min.css";

import { Navbar, Container, Nav, Col, Row } from "react-bootstrap";

// import { Routes, Route, Link } from 'react-router-dom'


const App = () => {
  let [shose] = useState(data);

  return (
    <div className="App">

      {/* <Routes>
        <Route path="/" element={<div>메인페이지</div>}/>
        <Route path="/datail" element={<div>상세페이지</div>}/>
        <Route path="/about" element={<div>어바웃페이지</div>}/>
      </Routes> */}

      <ReactBlog />
      <Navbar bg="light" variant="light">
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
          
          {/* <Card shose={shose[1]} i={2}></Card>
          <Card shose={shose[2]} i={3}></Card> */}
          {
            shose.map((a,i) => {
              return(
                <Card shose={shose[i]} i={i}></Card>
              )
            })
          }
        </Row>
      </Container>
    </div>
  );
};

function Card(props) {
  return (
    <Col>
      <img src={"https://codingapple1.github.io/shop/shoes"+(props.i+1)+".jpg"} width="80%" />
      <h4>{props.shose.title}</h4>
      <p>{props.shose.price}</p>
    </Col>
  );
}

export default App;
