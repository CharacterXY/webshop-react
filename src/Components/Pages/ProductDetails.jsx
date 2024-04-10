import React from "react";

import "./ProductDetails.scss";
import "../../assets/main.scss";
import "../Products/Product.scss";
import { useModal } from "../ModalContext";

function ProductDetails() {
  //const [isLoading, setIsLoading] = useState(false);
  const { selectedProduct, closeModal } = useModal();

  console.log(selectedProduct);

  return selectedProduct ? (
    <>
      {/*  <!--MODAL WINDOWS FOR DETAILS OF PRODUCTS --> */}

      <div id="modal-box" className={`modal ${selectedProduct ? "open" : ""}`}>
        <div className="modal-content">
          <div className="modal-left">
            <div className="modal-text">{selectedProduct.title}</div>
            {Array.isArray(selectedProduct.imageUrl) ? (
              <img
                src={selectedProduct.imageUrl[0]}
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
                    key={index}
                    src={image}
                    alt={`Product Image ${index + 1}`}
                  />
                ))
              ) : (
                <img src={selectedProduct.imageUrl}></img>
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
              <span>
                <i className="fa-solid fa-warehouse"></i>
              </span>{" "}
              Availability: U WEBSHOPU
            </div>
            <div className="modal-prodcut-code">Product Code: 90622-5056</div>
            <div className="modal-product-size">
              <h3>Velicina</h3>
              <p>Odaberi velicinu</p>
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
              <button className="quantity-btn" id="decrement">
                -
              </button>
              <input
                id="quantity-input"
                className="quantity-input"
                value="1"
                min="1"
                readOnly
              />
              <button className="quantity-btn" id="increase">
                +
              </button>
            </div>

            <button className="btn btn-background" id="btn-modal">
              <i className="fas fa-shopping-cart"></i> Dodaj u košaricu
            </button>
          </div>

          <a href="#" className="modal-close">
            &times;
          </a>
        </div>
      </div>
    </>
  ) : (
    "no data"
  );
}

export default ProductDetails;
