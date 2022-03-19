import React from "react";
import { Card } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

function Products({ product }) {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/product/${product._id}`}>
        <Card.Img variant="top" src={product.image} />
      </Link>
      <Card.Title>{product.name}</Card.Title>
      <Card.Text>
        <h4>Price ${product.price}</h4>
      </Card.Text>
      <Card.Footer>
        <ReactStars
          value={product.rating}
          text={product.numReviews}
          activeColor="#ffd700"
        />
        ,
      </Card.Footer>
    </Card>
  );
}

export default Products;
