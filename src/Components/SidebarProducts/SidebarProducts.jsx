  import  { useState } from "react";


  import "./SidebarProducts.scss";
  import "../../assets/main.scss";

  function SidebarProducts() {
    const [price, setPrice] = useState(100);

    function handlePriceChange(event) {
      // setPrice(event.target.value);
    }

    const radioButtons = [{
      id: "brand1",
      value: "Trek",
      name: "brand1"

    },{
      id: "brand2",
      value: "Trek",
      name: "brand2"

    },{
      id: "brand3",
      value: "Trek",
      name: "brand3"

    }];

    return (
      <div>
        {/* SIDEBAR */}

        <aside className="sidebar">
          <form action="" method="GET">
            <h3>Brands:</h3>
            <br />
            <hr />
            <br />

            {radioButtons.map(item => {
              return (
                <div key={item.id} className="form-group">
                  <input type="checkbox" id={item.name} name={item.name} value={item.value} />
                  <label htmlFor={item.name}>Trek</label>
                </div>
              )
            })}
            <div className="form-group">
              {/* <input type="checkbox" id="brand1" name="brand1" value="Trek" /> */}
              <label htmlFor="brand1">Trek</label>
            </div>
            <div className="form-group">
              {/* <input type="checkbox" id="brand2" name="brand2" value="Giant" /> */}
              <label htmlFor="brand2">Giant</label>
            </div>
            <div className="form-group">
              {/* <input type="checkbox" id="brand3" name="brand3" value="Norco" /> */}
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
              <input type="radio" id="price1" name="price" defaultValue="100" /> 
              <label htmlFor="price1">0 - 100 € </label>
              <br />
              <input type="radio" id="price2" name="price" defaultValue="500" /> 
              <label htmlFor="price2">0 - 500 €</label>
              <br />
              <input type="radio" id="price3" name="price" defaultValue="1000" />
              <label htmlFor="price3">0 - 1000 €</label>
              <br />
            
              <input
                
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
                {/* Value: <output htmlFor="price">{price}</output> € */}
              </p>
            </div>
          </form>
        </aside>
      </div>
    );
  }

  export default SidebarProducts;
