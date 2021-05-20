import Footer from '../../components/Layout/Footer/Footer';
import  Header from '../../components/Layout/Header/Header';

const Layout = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default Layout;
