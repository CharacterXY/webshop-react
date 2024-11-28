//import { useState } from 'react';

import './SidebarProducts.scss';
import '../../assets/main.scss';
import iconEuro from '../../assets/icons8-euro-33.png';
import Slider from '@mui/material/Slider';

function SidebarProducts({ products, price, setPrice }) {
  //const [selectedCategories, setSelectedCategories] = useState([]);

  /*   useEffect(() => {
    // Correct placement of console.log for debugging
    console.log('Selected Categories: ', selectedCategories);
    console.log('Current Price: ', price);
    console.log('Filtering Products...');

    const filtered = products.filter((item) => {
      // Log each item's price to debug filtering logic
      console.log('Item Price: ', item.price);

      return selectedCategories.length > 0
        ? item.price <= price && selectedCategories.includes(item.category)
        : item.price <= price;
    });

    setFilteredProducts(filtered);
  }, [price, products, selectedCategories]); */

  /*   const handleCategoryChange = (event) => {
    const categoryName = event.target.value;
    setSelectedCategories((prev) =>
      event.target.checked
        ? [...prev, categoryName]
        : prev.filter((category) => category !== categoryName)
    );
  }; */

  const handlePriceChange = (event, newValue) => {
    console.log('new price', newValue);
    setPrice(newValue);
  };

  const radioButtons = [
    { id: 'brand1', value: 'Trek', name: 'Trek' },
    { id: 'brand2', value: 'Giant', name: 'Giant' },
    { id: 'brand3', value: 'Norco', name: 'Norco' },
    { id: 'brand4', value: 'Specialized', name: 'Specialized' },
  ];

  const itemsCategory = products.map((item) => item.category);
  const unique = [...new Set(itemsCategory)];

  /*   const resetFilter = () => {
    setPrice(0); // Reset price state to 0
    setSelectedCategories([]); // Reset selected categories
  };
 */
  return (
    <div>
      {/* SIDEBAR */}

      <aside className='sidebar'>
        <form action='' method='GET'>
          <h3>Brands:</h3>
          <hr />
          <br />

          {radioButtons.map((item) => {
            return (
              <div key={item.id} className='form-group'>
                <input
                  type='checkbox'
                  id={item.id}
                  name={item.name}
                  value={item.value}
                />
                <label htmlFor={item.name} className='sidebar-brand'>
                  {item.name}
                </label>
              </div>
            );
          })}
          <br />
          <h3>Category:</h3>
          <hr />
          <br />

          {unique.map((item) => {
            console.log(item);
            return (
              <div className='form-group' key={item}>
                <input
                  type='checkbox'
                  id={item}
                  name={item}
                  value={item}
                  //checked={selectedCategories.includes(item)}
                  //onChange={handleCategoryChange}
                />
                <label htmlFor={item.name} className='sidebar-brand'>
                  {item}
                </label>
              </div>
            );
          })}
          <br />
          <h3>Price:</h3>
          <hr />

          <div className='price-box'>
            <p className='price-box__heading'>Please select your price:</p>

            <input type='radio' id='price1' name='price' defaultValue='100' />
            <label htmlFor='price1'>0 - 100 € </label>
            <br />
            <input type='radio' id='price2' name='price' defaultValue='500' />
            <label htmlFor='price2'>0 - 500 €</label>
            <br />
            <input type='radio' id='price3' name='price' defaultValue='1000' />
            <label htmlFor='price3'>0 - 1000 €</label>
            <br />

            <Slider
              sx={{
                color: 'green',
                '& .MuiSlider-thumb': {
                  borderRadius: '20px',
                },
                '& .MuiSlider-track': {
                  bgcolor: 'green',
                },
                '& .MuiSlider-rail': {
                  bgcolor: '#d8d8d8',
                },
              }}
              onChange={handlePriceChange}
              aria-label='Price'
              value={price}
              min={100}
              max={7000}
              step={10}
              valueLabelDisplay='auto'
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

            <div className='slider'>
              Value:{' '}
              <output htmlFor='slider__price' className='slider__price'>
                {price} <img src={iconEuro} className='slider__icon'></img>
              </output>{' '}
            </div>
          </div>
        </form>
      </aside>
    </div>
  );
}
export default SidebarProducts;
