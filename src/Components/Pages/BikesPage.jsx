import Product from "../Products/Product";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SidebarProducts from "../SidebarProducts/SidebarProducts";
import "../Products/Product.scss";
import "../SidebarProducts/SidebarProducts.scss";
import "../../assets/main.scss";
import "./BikesPage.scss";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";


function Bikes() {

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



  return (
    <>
      <Header />
      <div className="container-wrapper">
        <SidebarProducts />
        <div className="main-content">
          <div className="card-container-header">
            <div className="breadcrumb">
              <h3>
                <NavLink to="/">Home</NavLink> /
                <span className="actual_page">Bicikli</span>
              </h3>
            </div>

            <h2>Bicikli po odlicnim cijenama</h2>

            <p>
              Izbor Trek modela izrazito je velik, bez obzira želite li cestovni
              ili brdski bicikl, ili pak nešto između poput trekking bicikla,
              oni proizvode sve! Jedan je od najpoznatijih brendova na tržištu i
              izuzetno rasprostranjen i kod nas, što najviše govori o kvaliteti
              bicikala koje proizvode. Natjecatelji su također prepoznali
              kvalitetu njihovih bicikala, pa su upravo na njima osvajane i
              brojne titule u cestovnom i brdskom biciklizmu. Istražite ponudu
              Trek bicikala putem našeg Web shopa i odaberite bicikle provjerene
              kvalitete!
            </p>

            <label className="filter-label" >
              Odaberite kriterij za pretragu
            </label>
            <select id="search-criteria" name="criteria">
              <option value="option1">Najnoviji</option>
              <option value="option1">Cijena: manja prema većoj</option>
              <option value="option2">Cijena: veća prema manjoj</option>
              <option value="option3">Popust: veći prema manjem</option>
              <option value="option4">Popust: manji prema većem</option>
            </select>

            <label className="custom-checkbox">
              <input
                type="checkbox"
                id="customCheckbox"
                name="customCheckbox"
              />
              <span className="checkmark"></span>
              Odaberi proizvode samo na akciji
            </label>
          </div>
          <div className="card-container">

           { products?.map((product) => (
              <Product  
              key={product.id}
              product={product}
              


              />
           ))
           }
          </div>
          <div className="pagination">
            <div className="pagination pagination--1">1</div>
            <div className="pagination pagination--2">2</div>
            <div className="pagination pagination--3">3</div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}




export default Bikes;
