import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import HomeScreen from "./Screens/HomeScreen";
import { Routes, Route } from "react-router-dom";
import Products from "./components/Products";
import ProductScreen from "./Screens/ProductScreen";
const App = () => {
  return (
    <>
      <Header />
      <main>
        <Container className="py-3">
          <Routes>
            <Route path="/" element={<HomeScreen />} exact />
            <Route path="/Products/:id" element={<ProductScreen />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
