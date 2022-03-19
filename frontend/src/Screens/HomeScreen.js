import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import axios from "axios";
import Products from "../components/Products";

function HomeScreen() {
  const [product, setproduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const result = await axios("/api/products");
      setproduct(result.data);
      setLoading(false);
      console.log(result.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>lates products</h1>
      {loading ? (
        <div>loading...</div>
      ) : (
        <Row xs={5} md={4} lg={5}>
          {product.map((product) => {
            return (
              <Col>
                <Products product={product ? product : "no data"} />
              </Col>
            );
          })}
        </Row>
      )}
    </div>
  );
}

export default HomeScreen;
