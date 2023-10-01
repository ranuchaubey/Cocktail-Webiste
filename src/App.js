import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ProductDetails from "./Pages/ProductDetails";
import PageNotFound from "./Components/PageNotFound";
import Layout from "./Components/Layout";
import Searchbox from "./Components/Searchbox";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Searchbox />
              <HomePage />
            </Layout>
          }
        />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
