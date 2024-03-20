import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import "./ProductDetails.scss";

function ProductDetails(){

    const BASE_URL = "http://localhost:9000";
    const [products, setProducts] = useState([]);
    //const [isLoading, setIsLoading] = useState(false);
  
  
    useEffect(function () {
      async function fetchProducts() {
        try {
         //setIsLoading(true)
          const res = await fetch(`${BASE_URL}/products`);
          const data = await res.json();
    
          console.log(data);
          setProducts(data);
    
        } catch {
          alert("There was an error loading data");
        } finally {
          //setIsLoading(false);
        }
      }
  
      fetchProducts();
    }, []);

  let stuff = [...products];

  let productsItem = stuff.length;
 // console.log(productsItem);

   let { id } = useParams()

   const bike = stuff.filter((item) => item.id === id);


   return (
     id < productsItem ? (
    <div className='product-details'>
    <h1>Hello from ProductDetails</h1>
         <h2>ID ovog proizvoda je <bold>{id}</bold></h2>
         <h1>{bike[0].title}</h1>
         <h2><bold>Ukupno imamo {productsItem}</bold> na JSON Serveru</h2>
    </div>
    
   ) : <h1 style={{ textAlign: 'center'}}>Error, that ID is not exists</h1>
   );
}

export default ProductDetails;