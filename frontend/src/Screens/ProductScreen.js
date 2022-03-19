import React, { useState, useEffect } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

function ProductScreen() {
  const { id } = useParams();
  const [product, setproduct] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const result = await axios("/api/products/" + id);
      setproduct(result.data);
      setLoading(false);
      console.log(result.data);
    };
    fetchData();
  }, [id]);

  return (
    <div>
      <Link className="btn btn btn-primary my-3" to="/">
        {" "}
        Go back
      </Link>
      {loading ? (
        <div>loading...</div>
      ) : (
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
              cOUNT: {product.countInStock > 0
                ? "iNSTOCK"
                : "OUT OF STOCK"}{" "}
            </Card.Text>
            <Button variant="primary" disabled={product.countInStock === 0}>
              Add to cart
            </Button>
          </Col>
        </Row>
      )}
    </div>
  );
}

export default ProductScreen;
