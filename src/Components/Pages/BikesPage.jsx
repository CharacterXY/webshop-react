import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { NavLink } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import Product from "../Products/Product";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SidebarProducts from "../SidebarProducts/SidebarProducts";
import { useModal } from "../ModalContext";
import ShoppingCart from "./Cart";
import "../../assets/main.scss";
import "./BikesPage.scss";
import { selectClasses } from "@mui/material";
import { getProducts } from "../../utils/api";

const { data: products, isLoading: isProductsLoading } = useQuery(
  "products",
  getProducts,
  { cacheTime: 0 }
);

useEffect(() => {}, [products]);
function Bikes() {
  const BASE_URL = "http://localhost:9000";
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [price, setPrice] = useState(Number(0), 10);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const text = `Izbor Trek modela izrazito je velik, bez obzira želite li cestovni ili brdski bicikl, ...`;

  const toggleText = () => setShowFullDescription(!showFullDescription);
  const { openModal } = useModal();

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch(`${BASE_URL}/products`);
        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
        alert("There was an error loading data");
      } finally {
        setIsLoading(false);
      }
    }
    fetchProducts();
  }, []);

  useEffect(() => {
    console.log("Filtered products:", filteredProducts);
  }, [filteredProducts]);

  return (
    <>
      <Header />
      <ShoppingCart />
      <div className="container-wrapper">
        <SidebarProducts
          products={products}
          setFilteredProducts={setFilteredProducts}
          price={price}
          setPrice={setPrice}
        />
        <div className="main-content">
          <div className="card-container-header">
            <div className="breadcrumb">
              <h3>
                <NavLink to="/">Home</NavLink> /{" "}
                <span className="actual_page">Bicikli</span>
              </h3>
            </div>
            <h2>BICIKLI PO ODLIČNIM CIJENAMA</h2>
            <p className="bikes_text">
              {showFullDescription ? text : `${text.substring(0, 205)}...`}
            </p>
            <button className="btn a" onClick={toggleText}>
              {showFullDescription ? "Show Less" : "Show More"}
            </button>
          </div>
          <div className="card-container">
            {isLoading ? (
              <CircularProgress color="success" size={80} thickness={2} />
            ) : filteredProducts.length ? (
              filteredProducts.map((product) => (
                <Product
                  key={product.id}
                  title={product.title}
                  description={product.description}
                  price={product.price}
                  imageUrl={product.imageUrl}
                  stock={product.stock}
                  brand={product.brand}
                  category={product.category}
                  rating={product.rating}
                  isAvailable={product.isAvailable}
                />
              ))
            ) : (
              <CircularProgress color="success" size={80} thickness={2} />
            )}
          </div>
          <div className="pagination">
            <div className="pagination pagination--1">1</div>
            <div className="pagination pagination--2">2</div>
            <div className="pagination pagination--3">3</div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Bikes;
