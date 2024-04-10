import { NavLink } from "react-router-dom";

import PropTypes from "prop-types";
import "./Product.scss";
import { useModal } from "../ModalContext";

function Product({ id, title, description, price, imageUrl }) {
  const { openModal } = useModal();
  return (
    <div>
      <div
        className="product-card"
        onClick={() => openModal({ id, title, description, price, imageUrl })}
      >
        <div className="product-image">
          <img src={imageUrl[0]} alt="Product Image" />
        </div>

        <div className="product-info product-info-background">
          <div className="product-title">{title}</div>
          <div className="product-price">{price} €</div>
          <div className="product-description">{description}</div>
          <div className="bottom-card">
            <NavLink to="/shopping-card">U Košaricu </NavLink>
            <i className="fas fa-shopping-cart"></i>

            <NavLink to={`/bicikli/${id}`}>Detalji proizvoda</NavLink>
            <i className="fa-solid fa-arrow-right"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

Product.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default Product;
