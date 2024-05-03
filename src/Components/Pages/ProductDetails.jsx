import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./ProductDetails.scss";
import "../../assets/main.scss";
import "../Products/Product.scss";
import { useModal } from "../ModalContext";
import { useCart } from "../CartContext";
import "../Pages/ProductDetails.scss";

function ProductDetails() {
  const { selectedProduct, closeModal } = useModal();
  const [quantity, setQuantity] = useState(1);
  const [indexImage, setIndexImage] = useState(0);
  const [showToast, setShowToast] = useState(false);

  //const { openModal } = useModal();
  const { addToCart } = useCart();
  const { cart } = useCart();

  const handleProductToCart = (selectedProduct) => {
    console.log("Adding to cart:", selectedProduct);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
    addToCart(selectedProduct);
    console.log(cart);
  };

  // Dodajem dinamicki klasu za animaciju da pulsira ovisno o stanju
  let lightClass = selectedProduct?.isAvailable
    ? "product-light--green"
    : "product-light--red";

  function setPicture(index) {
    setIndexImage(index);
  }

  function increaseQuantity() {
    setQuantity(quantity + 1);
  }

  function decreaseQuantity() {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    } else {
      alert("Morate imati bar jedan proizvod da biste nastavili");
    }
  }

  return selectedProduct ? (
    <>
      {/*  <!--MODAL WINDOWS FOR DETAILS OF PRODUCTS --> */}

      <div id="modal-box" className={`modal ${selectedProduct ? "open" : ""}`}>
        <div className="modal-content">
          <div className="modal-left">
            <div className="modal-text">{selectedProduct.title}</div>
            {Array.isArray(selectedProduct.imageUrl) ? (
              <img
                src={
                  Array.isArray(selectedProduct.imageUrl)
                    ? selectedProduct.imageUrl[indexImage]
                    : selectedProduct.imageUrl[0]
                }
                alt="Main Prodcut Image"
                className="modal-main-image"
              />
            ) : (
              <img
                src={selectedProduct.imageUrl}
                alt="Main Prodcut Image"
                className="modal-main-image"
              />
            )}

            <div className="modal-image-gallery">
              {/*Ostaviti cemo mogucnost da nemaju svi objekti polje imageUrl */}

              {Array.isArray(selectedProduct.imageUrl) ? (
                selectedProduct.imageUrl.map((image, index) => (
                  <img
                    onClick={() => setPicture(index)}
                    key={index}
                    src={image}
                    alt={`Product Image ${index + 1}`}
                  />
                ))
              ) : (
                <img
                  src={selectedProduct.imageUrl}
                  alt="Main Product Image"
                ></img>
              )}
            </div>
            <p>
              * Podaci navedeni na ovoj stranici su informativne prirode i nisu
              obvezujući. Slike ne moraju odgovarati točno proizvodu na
              stranici, svi podaci su podložni promjeni bez prethodne najave.
            </p>
          </div>

          <div className="modal-right">
            <h3 className="modal-product-title">
              {selectedProduct.title}
              <span className="modal-star-rating"> ★★★★☆</span> (0)
            </h3>
            <div>{selectedProduct.description}</div>
            <div className="modal-product-price">
              <strong>Price:</strong> {selectedProduct.price} €
            </div>

            <div className="modal-availability">
              <h3>
                {selectedProduct.isAvailable
                  ? "Raspolozvio"
                  : "Trenutno Nedostupno"}
              </h3>
              <div className={`${lightClass}`}></div>
            </div>
            <div className="modal-prodcut-code">
              <h3> Product Code: {selectedProduct.productCode}</h3>
            </div>
            <div className="modal-product-size">
              <h3> Odaberi Velicinu</h3>

              <br />
              <button className="velicina-bicikle">
                <a href="">S-27.5"</a>
              </button>
              <button className="velicina-bicikle">
                <a href="">XS-27.5"</a>
              </button>
              <button className="velicina-bicikle">
                <a href="">S</a>
              </button>
              <button className="velicina-bicikle">
                <a href="">M</a>
              </button>
              <button className="velicina-bicikle">
                <a href="">M/L</a>
              </button>
              <button className="velicina-bicikle">
                <a href="">L</a>
              </button>
              <button className="velicina-bicikle">
                <a href="">XL</a>
              </button>
            </div>

            <div className="quantity-selector">
              <button
                className="quantity-btn"
                id="decrement"
                onClick={decreaseQuantity}
              >
                -
              </button>
              <input
                id="quantity-input"
                className="quantity-input"
                value={quantity}
                onChange={(event) => setQuantity(Number(event.target.value))}
                min="1"
              />
              <button
                className="quantity-btn"
                id="increase"
                onClick={increaseQuantity}
              >
                +
              </button>
            </div>

            <button
              className="btn btn-background"
              id="btn-modal"
              onClick={() => handleProductToCart(selectedProduct)}
            >
              <i className="fas fa-shopping-cart"></i> Dodaj u košaricu
            </button>

            {showToast && (
              <div className="toast show">
                Proizvod {selectedProduct.title.slice(0, 10)}
                {selectedProduct.title.length > 10 ? "..." : ""} je dodan u
                košaricu!
              </div>
            )}
          </div>
          <NavLink to="/bicikli" className="modal-close" onClick={closeModal}>
            {" "}
            &times;
          </NavLink>
          <a href="" onClick={closeModal}></a>
        </div>
      </div>
    </>
  ) : (
    "no data"
  );
}

export default ProductDetails;
