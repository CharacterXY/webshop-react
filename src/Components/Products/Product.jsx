import "./Product.scss";
//import productImage from "../../assets/bicikli-oprema.jpg";

function Product({ title, price, description, imageUrl }) {
  const fullImageUrl = `${imageUrl}`;

  return (
    <div>
      <div className="product-card">
        <div className="product-image">
          <img src={imageUrl} alt="Product Image" />
        </div>

        <div className="product-info product-info-background">
          <div className="product-title">{title}</div>
          <div className="product-price">{price}</div>
          <div className="product-description">{description}</div>
          <div className="bottom-card">
            <a href="">
              U Košaricu <i className="fas fa-shopping-cart"></i>{" "}
            </a>

            <a href="#modal-box">
              Detalji proizvoda <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
