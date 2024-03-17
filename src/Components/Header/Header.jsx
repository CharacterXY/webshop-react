import { NavLink } from 'react-router-dom';
import "./Header.scss";
import logo from "../../assets/logo15.png";


function Header() {
  return (
    <header className="header">
      <div className="header__top-row">
        <div className="contact-icons">
          <i className="fa-solid fa-phone"></i>
          <span className="phone-data">022336791</span>
          <i className="fa-solid fa-envelope"></i>
          <span className="email-data">bike-shop@outdoor.hr</span>
        </div>

        <div className="company-social-icons">
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-facebook-f"></i>
          <i className="fa-brands fa-instagram"></i>
        </div>

        <div className="header__web-icons">
          <a href="#search" className="fas fa-search"></a>
          <div id="login-btn" className="fas fa-user"></div>
          <a href="#card-modal" className="fas fa-shopping-cart">
            <span className="cart-counter">1</span>
          </a>
        </div>
      </div>

      <div className="header__bottom-row">
        <div className="header__logo">
          <img src={logo} alt="Logo" />
        </div>
        <nav className="navigation-desktop navigation-desktop-background">
          <ul>
            <li>
              <NavLink to="bicikli">Bicikli</NavLink>
            </li>
            <li>
              <NavLink to="dijelovi">Dijelovi</NavLink>
            </li>
            <li>
            <NavLink to="oprema">Oprema</NavLink>
            </li>
            <li>
            <NavLink to="akcija">Akcija</NavLink>
            </li>
            <li>
            <NavLink to="blog">Blog</NavLink>
            </li>
            <li>
            <NavLink to="kontakt">Kontakt</NavLink>
            </li>
          </ul>
        </nav>
      </div>

      <div id="card-modal" className="modal">
        <div className="card-content">
          <a href="">
            <span className="close-button">&times;</span>
          </a>
          <h2>Vaša Košarica</h2>

          <div className="cart-items">
            <div className="cart-item">
              <img
                src="images/fuel-ex-8.webp"
                alt="Artikl"
                className="item-image"
              />
              <div className="item-details">
                <p className="item-name">Trek Fulex Exe 8.0</p>
                <p className="item-price">2100.00 €</p>
                <input type="number" value="1" class="item-quantity" />
              </div>
            </div>
          </div>

          <div className="cart-total">
            <p>
              Ukupno: <span>2100.00 €</span>
            </p>
          </div>
          <button className="btn btn-background">Naplata</button>
        </div>
      </div>

      {/* SEARCH MODAL, ZA SEARCH IKONICE KAD SE STISNE AKTIVIRA SE SEARCH-MODA */}

      <div id="search" className="search">
        <div className="search-box">
          <a href="">
            <span className="close-button">&times;</span>
          </a>

          <h3>Pretraga :</h3>
          <input type="text" placeholder="Search shop..." />
        </div>
      </div>
    </header>
  );
}

export default Header;
