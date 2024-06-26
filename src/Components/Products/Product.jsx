import { NavLink } from "react-router-dom";
import { useState } from "react";
import PropTypes from "prop-types";
import "./Product.scss";
import { useModal } from "../ModalContext";
import { CartProvider, useCart } from "../CartContext";
import "../Pages/ProductDetails.scss";

function Product({
  id,
  title,
  description,
  price,
  imageUrl,
  productCode,
  stock,
  brand,
  category,
  rating,
  isAvailable,
  size,
}) {
  const { addToCart } = useCart();

  const [showToast, setShowToast] = useState(false);

  const handleProductToCart = (event) => {
    event.preventDefault();

    if (!isAvailable) {
      alert("Proizvod nije dostupan");
    } else {
      addToCart({ id, title, price, quantity: 1 });
    }

    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const { openModal } = useModal();
  return (
    <div>
      <div
        className="product-card"
        onClick={() =>
          openModal({
            id,
            title,
            description,
            price,
            imageUrl,
            productCode,
            stock,
            brand,
            category,
            rating,
            isAvailable,
            size,
          })
        }
      >
        <div className="product-image">
          {Array.isArray(imageUrl) ? (
               <img src={imageUrl[1]} alt="Product Image" />
          ) : <img src={imageUrl}></img>}
        
        </div>

        <div className="product-info product-info-background">
          <div className="product-title">{title}</div>
          <div className="product-price">{price} €</div>
          <div className="product-description">{description}</div>
          <div className="bottom-card">
            <div className="link-icon-pair">
              {" "}
              <NavLink to="" onClick={addToCart}>
                U Košaricu{" "}
              </NavLink>
              <i className="fas fa-shopping-cart"></i>
            </div>

            <div className="link-icon-pair">
              <NavLink to={`/bicikli/${id}`}>Detalji proizvoda</NavLink>
              <i className="fa-solid fa-arrow-right"></i>
            </div>
          </div>
        </div>
      </div>
      {showToast && isAvailable && (
        <div className="toast show">
          Proizvod {`${id}`} je dodan u Vašu košaricu !
        </div>
      )}
    </div>
  );
}

Product.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  imageUrl: PropTypes.array.isRequired,
  productCode: PropTypes.string,
  stock: PropTypes.number,
  brand: PropTypes.string,
  category: PropTypes.string,
  rating: PropTypes.number,
  isAvailable: PropTypes.bool.isRequired,
  size: PropTypes.string,
};

export default Product;
