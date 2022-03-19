import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Image,
  ListGroup,
} from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import products from "../products";
import { Link, useParams } from "react-router-dom";

function ProductScreen() {
  const { id } = useParams();
  console.log(id);
  const product = products.find((p) => p._id === id);
  console.log(id);
  console.log(product);
  return (
    <div>
      <Link className="btn btn btn-primary my-3" to="/">
        {" "}
        Go back
      </Link>
      <Row>
        <Col md={6}>
          <Card>
            <Card.Img variant="top" src={product.image} fluid />
          </Card>
        </Col>
        <Col md={3}>
          <Card.Title>{product.name}</Card.Title>{" "}
          <Card.Text>{product.description}</Card.Text>
          <ReactStars
            value={product.rating}
            text={product.numReviews}
            activeColor="#ffd700"
          />
          <Card.Text> Price: ${product.price}</Card.Text>
          <Card.Text>
            {" "}
            cOUNT: {product.countInStock > 0 ? "iNSTOCK" : "OUT OF STOCK"}{" "}
          </Card.Text>
          <Button variant="primary" disabled={product.countInStock == 0}>
            Add to cart
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default ProductScreen;
