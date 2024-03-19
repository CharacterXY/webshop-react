import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import "./SidebarProducts.scss";
import "../../assets/main.scss";

function SidebarProducts() {
  const [price, setPrice] = useState(100);

  function handlePriceChange(event) {
    setPrice(event.target.value);
  }

  return (
    <div>
      {/* SIDEBAR */}

      <aside className="sidebar">
        <form action="" method="GET">
          <h3>Brands:</h3>
          <br />
          <hr />
          <br />
          <div className="form-group">
            <input type="checkbox" id="brand1" name="brand1" value="Trek" />
            <label htmlFor="brand1">Trek</label>
          </div>
          <div className="form-group">
            <input type="checkbox" id="brand2" name="brand2" value="Giant" />
            <label htmlFor="brand2">Giant</label>
          </div>
          <div className="form-group">
            <input type="checkbox" id="brand3" name="brand3" value="Norco" />
            <label htmlFor="brand3">Norco</label>
          </div>
          <br />
          <h3>Price:</h3>
          <br />
          <hr />
          <br />
          <div className="price-box">
            <p>Please select your price:</p>
            <br />
            <input type="radio" id="price1" name="price" value="100" />
            <label htmlFor="price1">0 - 100 € </label>
            <br />
            <input type="radio" id="price2" name="price" value="500" />
            <label htmlFor="price2">0 - 500 €</label>
            <br />
            <input type="radio" id="price3" name="price" value="1000" />
            <label htmlFor="price3">0 - 1000 €</label>
            <br />
            <input
              onChange={handlePriceChange}
              type="range"
              id="price"
              name="price"
              min="100"
              max="5000"
              defaultValue={price}
              step="10"
            />
            <br />
            <br />

            <p>
              Value: <output id="value">{price}</output> €
            </p>
          </div>
        </form>
      </aside>
    </div>
  );
}

export default SidebarProducts;
