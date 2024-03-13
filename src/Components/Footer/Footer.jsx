import "./Footer.scss";

function Footer() {
  return (
    <footer>
      <div className="footer-row">
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Bicikli</a>
            </li>
            <li>
              <a href="">Doatna oprema</a>
            </li>
            <li>
              <a href="">Dijelovi</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Mapa</h3>

          <iframe
            className="iframe iframe-map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11528.212860770936!2d15.8823767!3d43.7509917!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13352f4eeb7a8057%3A0x361615fbb2fbb0ad!2sILJADICA-RAPO%20d.o.o.!5e0!3m2!1shr!2shr!4v1704699202532!5m2!1shr!2shr"
            width="300"
            height="200"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="footer-column">
          <h3>About Company</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor
            voluptates in quos. Repellat laudantium, dolorum, quod velit,
            voluptatibus eveniet illum obcaecati nostrum assumenda sed quidem
            optio facilis laborum iusto nam quas. Quisquam, quas quidem suscipit
            voluptas non deleniti necessitatibus amet pariatur fugiat vitae fuga
            harum omnis! Tempore in asperiores assumenda.
          </p>
        </div>
      </div>
      <div className="footer-row">
        <div className="footer-column">
          <h3>Delivery</h3>
          <p>Information about shipping and delivery services</p>
          <ul>
            <li>Express/GLS</li>
            <li>Dostava u poslovnicu</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Contact Information</h3>
          <ul>
            <li>
              <a href=""></a>OUTDOORSHOP.HR
            </li>
            <li>
              <a href=""></a>ADRESA: Šibenska 2A, 22000 Šibenik
            </li>
            <li>
              <a href=""></a>TELEFON: +385 99 1111-211
            </li>
            <li>
              <a href=""></a>EMAIL: info@outdoorbike-shop.hr
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>From the Blog</h3>
          <ul>
            <li>
              <a href="">Trek ima novi električni bicikl za 2024!</a>
            </li>
            <li>
              <a href="">Kako odabrati prvi bicikl za dijete ?</a>
            </li>
            <li>
              <a href="">Što je tubeless i kako ga koristiti</a>
            </li>
            <li>
              <a href="">Kaciga je odsad obvezna i na romobilu</a>
            </li>
            <li>
              <a href="">Cube najbolji omjer cijene i kvalitete</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
