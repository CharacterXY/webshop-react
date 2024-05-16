import { useState } from "react";

import "./SidebarProducts.scss";
import "../../assets/main.scss";
import iconEuro from "../../assets/icons8-euro-33.png";
import Slider from "@mui/material/Slider";

function SidebarProducts() {
  const [price, setPrice] = useState(100);

  function handlePriceChange(event) {
    setPrice(event.target.value);
  }

  const radioButtons = [
    {
      id: "brand1",
      value: "Trek",
      name: "Trek",
    },
    {
      id: "brand2",
      value: "Giant",
      name: "Giant",
    },
    {
      id: "brand3",
      value: "Norco",
      name: "Norco",
    },
    {
      id: "brand3",
      value: "Specialized",
      name: "Specialized",
    },
  ];

  return (
    <div>
      {/* SIDEBAR */}

      <aside className="sidebar">
        <form action="" method="GET">
          <h3>Brands:</h3>
          <hr />
          <br />

          {radioButtons.map((item) => {
            return (
              <div key={item.id} className="form-group">
                <input
                  type="checkbox"
                  id={item.id}
                  name={item.name}
                  value={item.value}
                />
                <label htmlFor={item.name} className="sidebar-brand">
                  {item.name}
                </label>
              </div>
            );
          })}
          <br />
          <h3>Category:</h3>
          <hr />
          <br />
          <div className="form-group">
            <input type="checkbox" id="brand1" name="brand1" value="Trek" />
            <label htmlFor="category1" className="sidebar-brand">
              MTB
            </label>
          </div>
          <div className="form-group">
            <input type="checkbox" id="brand2" name="brand2" value="Giant" />
            <label htmlFor="category2" className="sidebar-brand">
              City Bikes
            </label>
          </div>
          <div className="form-group">
            <input type="checkbox" id="brand3" name="brand3" value="Norco" />
            <label htmlFor="category3" className="sidebar-brand">
              Electric Bikes
            </label>
          </div>
          <div className="form-group">
            <input type="checkbox" id="brand3" name="brand4" value="" />
            <label htmlFor="category4" className="sidebar-brand">
              Enduro Bikes
            </label>
          </div>
          <div className="form-group">
            <input type="checkbox" id="brand3" name="brand4" value="" />
            <label htmlFor="category5" className="sidebar-brand">
              BMX
            </label>
          </div>
          <br />
          <h3>Price:</h3>
          <hr />

          <div className="price-box">
            <p className="price-box__heading">Please select your price:</p>

            <input type="radio" id="price1" name="price" defaultValue="100" />
            <label htmlFor="price1">0 - 100 € </label>
            <br />
            <input type="radio" id="price2" name="price" defaultValue="500" />
            <label htmlFor="price2">0 - 500 €</label>
            <br />
            <input type="radio" id="price3" name="price" defaultValue="1000" />
            <label htmlFor="price3">0 - 1000 €</label>
            <br />

            <Slider
              sx={{
                color: "green",
                "& .MuiSlider-thumb": {
                  borderRadius: "20px",
                },
                "& .MuiSlider-track": {
                  bgcolor: "green",
                },
                "& .MuiSlider-rail": {
                  bgcolor: "#d8d8d8",
                },
              }}
              onChange={handlePriceChange}
              aria-label="Price"
              value={price}
              min={100}
              max={5000}
              step={10}
              valueLabelDisplay="auto"
            />

            {/*      <input
              onChange={handlePriceChange}
              type="range"
              id="price"
              name="price"
              min="100"
              max="5000"
              defaultValue={price}
              step="10"
            /> */}
            <br />

            <div className="slider">
              Value:{" "}
              <output htmlFor="slider__price" className="slider__price">
                {price} <img src={iconEuro} className="slider__icon"></img>
              </output>{" "}
            </div>
          </div>
        </form>
      </aside>
    </div>
  );
}

export default SidebarProducts;
