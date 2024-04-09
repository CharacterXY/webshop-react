import { NavLink } from "react-router-dom";
import coverImage from "../../assets/cover-index.jpg";
import coverImage2 from "../../assets/newsletter.png";

function MainComponent() {
  return (
    <>
      <div className="cover">
        <img src={coverImage} alt="Cover" className="cover__img" />
      </div>
      <div className="text-box">
        <h1 className="heading-primary">
          <span className="heading-primary-main">Outdoor</span>
          <span className="heading-primary-sub">is where ride happens</span>
        </h1>
        {/*  */}
        <a href="#" className="btn btn-background">
          Discover our shop
        </a>
      </div>

      <section className="categories">
        <h2></h2>
        <div className="category large">
          <NavLink to="/bicikli"></NavLink>
   
          <h2>Prodaja bicikla po HOT cijenama</h2>
        </div>
        <div className="small-container">
          <div className="category small">
            <a href="" className="category-link"></a>
            <div className="categories-sub-heading">Servis bicikla</div>
          </div>
          <div className="category small">
            <a href="url-za-dodatnu-opremu" className="category-link"></a>
            <div className="categories-sub-heading">Dodatna oprema</div>
          </div>
          <div className="category small">
            <a href="url-za-ponudu-dijelova" className="category-link"></a>
            <div className="categories-sub-heading">Ponuda dijelova</div>
          </div>
        </div>
      </section>

      <section className="newsletter-page">
        <div className="newsletter-image">

          <img src={coverImage2} />
        </div>

        <div className="wrapper">
          <div className="newsletter-text">
            <h2>Ne propusti najbolje ponude !</h2>
            <p>
              Prijavite se na naš Newsletter i saznajte prije ostalih sve o
              ekskluzivnim ponudama, sniženjima i novostima u našoj ponudi.
            </p>
            <form method="GET">
              <div className="newsletter-form">
                <input type="text" placeholder="Vaše ime" />
                <br />
                <input type="text" placeholder="Vaša email adresa" />
                <div className="newsletter-checkbox">
                  <label>
                    <input type="checkbox" />
                    Suglasan sam s korištenjem danih podataka u svrhu primanja
                    obavijesti o posebnim ponudama i akcijama. Detaljni uvjeti
                    poslovanja dostupni su na sljedećem linku.
                  </label>
                </div>
                <button type="submit" className="btn btn-background">
                  Prijavi se
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default MainComponent;
