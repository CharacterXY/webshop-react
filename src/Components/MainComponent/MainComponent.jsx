import React from "react"; // Pretpostavka je da koristite React
import coverImage from "../../assets/cover-index.jpg";
import coverImage2 from "../../assets/wheel.jpg";

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
        {/* Ovdje koristite samo <a> umjesto <button><a></a></button> */}
        <a href="#" className="btn btn-background">
          Discover our shop
        </a>
      </div>

      <section className="newsletter-page">
        <div className="newsletter-image">
          {/* Ako imate sliku newslettera, dodajte putanju src-a */}
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
                <input type="email" placeholder="Vaša email adresa" />
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
