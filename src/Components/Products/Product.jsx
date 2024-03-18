import "./Product.scss";
import productImage from "../../assets/bicikli-oprema.jpg";

function Product({ products }) {
  return (
    <div>
      <div className="product-card">
        <div className="product-image">
          <img src={productImage} alt="Product Image" />
        </div>
        <div className="product-info product-info-background">
          <div className="product-title">
            TREK Fuel EXe 9.7 2023 Matte Pennyflake
          </div>
          <div className="product-price">2100.00 €</div>
          <div className="product-description">
            Fuel EX is a full suspension bike that’s made to hit every trail,
            every day. From epic long-distance rides to rowdy local trails after
            work, Fuel EX’s balanced geometry and sweet-spot suspension set-up
            give you nerve for descents and heart for climbs. We don’t think you
            should have to choose just one mountain bike. But if you do, choose
            this one.
          </div>
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
