import React from "react";
import "react-animated-slider/build/horizontal.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Button, Col, Row } from "reactstrap"
import Card from "./Test/Card";
function App() {
  return (
    <>
      <Button color="primary">lllllll</Button>
      <Row>
        {Array(3).fill("").map(() => (
          <Col md={4} sm={12}>
            <Card />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default App;
