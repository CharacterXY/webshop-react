import { NavLink } from "react-router-dom";
import { useState } from "react";
import PropTypes from "prop-types";
import "./Product.scss";
import { useModal } from "../ModalContext";
import "../Pages/ProductDetails.scss";

function Product({
  id,
  title,
  description,
  price,
  imageUrl,
  productCode,
  stock,
  bred,
  category,
  rating,
  isAvailable,
  size,
}) {
  const [showToast, setShowToast] = useState(false);

  const handleProductToCart = () => {
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
            bred,
            category,
            rating,
            isAvailable,
            size,
          })
        }
      >
        <div className="product-image">
          <img src={imageUrl[0]} alt="Product Image" />
        </div>

        <div className="product-info product-info-background">
          <div className="product-title">{title}</div>
          <div className="product-price">{price} €</div>
          <div className="product-description">{description}</div>
          <div className="bottom-card">
            <div className="link-icon-pair">
              {" "}
              <NavLink to="" onClick={handleProductToCart}>
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
      {showToast && (
        <div className="toast show">
          Proizvod {`${id}`} je dodan u Vašu košaricu !
        </div>
      )}
    </div>
  );
}

Product.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  imageUrl: PropTypes.array.isRequired,
  isAvailable: PropTypes.bool.isRequired,
};

export default Product;
