import  './Header.scss';
import logo from '../../assets/logo15.png';

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
              <li><a href="./bicikli.html">Bicikli</a></li>
              <li><a href="../dijelovi.html">Dijelovi</a></li>
              <li><a href="#">Oprema</a></li>
              <li><a href="#">Akcija</a></li>
              <li><a href="blog.html">Blog</a></li>
              <li><a href="../kontakt.html">Kontakt</a></li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
  
  export default Header;