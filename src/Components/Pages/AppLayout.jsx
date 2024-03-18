import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SidebarProdcuts from "../SidebarProducts/SidebarProducts";

function AppLayout() {
  return (
    <div>
      <Header />
      <SidebarProdcuts />
      <Footer />
    </div>
  );
}

export default AppLayout;
