import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MainComponent from "../MainComponent/MainComponent";
import "../../assets/main.scss";

function AppWrapperComponent() {
  return (
    <div>
      <Header />
      <MainComponent />
      <Footer />
    </div>
  );
}

export default AppWrapperComponent;
