import Footer from "../Component/Footer";
import Header from "../Component/Header";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
