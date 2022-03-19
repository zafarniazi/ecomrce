import React from "react";
import products from "../products";
import Products from "../components/Products";
import { Col, Row } from "react-bootstrap";

function HomeScreen() {
  return (
    <div>
      <h1>lates products</h1>

      <Row xs={5} md={4} lg={5}>
        {products.map((product) => {
          return (
            <Col>
              <Products product={product} />
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default HomeScreen;
