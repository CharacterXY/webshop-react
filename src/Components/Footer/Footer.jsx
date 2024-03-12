import './Footer.scss'

function Footer () {
    return (
        <footer>
        <div className="footer-row">
            <div className="footer-column">
               <h3>Quick Links</h3>
           <ul>
            <li><a href="">Home</a></li>
            <li><a href="">Bicikli</a></li>
            <li><a href="">Doatna oprema</a></li>
            <li><a href="">Dijelovi</a></li>
          </ul>
       </div>
    <div className="footer-column">
      <h3>About Company</h3>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor
        voluptates in quos. Repellat laudantium, dolorum, quod velit,
        voluptatibus eveniet illum obcaecati nostrum assumenda sed quidem optio
        facilis laborum iusto nam quas. Quisquam, quas quidem suscipit voluptas
        non deleniti necessitatibus amet pariatur fugiat vitae fuga harum omnis!
        Tempore in asperiores assumenda.
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
        <li><a href=""></a>OUTDOORSHOP.HR</li>
        <li><a href=""></a>ADRESA: Šibenska 2A, 22000 Šibenik</li>
        <li><a href=""></a>TELEFON: +385 99 1111-211</li>
        <li><a href=""></a>EMAIL: info@outdoorbike-shop.hr</li>
      </ul>
    </div>
    <div className="footer-column">
      <h3>From the Blog</h3>
      <ul>
        <li><a href="">Trek ima novi električni bicikl za 2024!</a></li>
        <li><a href="">Kako odabrati prvi bicikl za dijete ?</a></li>
        <li><a href="">Što je tubeless i kako ga koristiti</a></li>
        <li><a href="">Kaciga je odsad obvezna i na romobilu</a></li>
        <li><a href="">Cube najbolji omjer cijene i kvalitete</a></li>
      </ul>
    </div>
  </div>


</footer>

    )
}

export default Footer;