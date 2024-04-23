import './App.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Banner from './components/banner/Banner';
import Supplier from './components/supplier/Supplier';
import Services from './components/services/Services';
import Company from './components/company/Company';
import PartnerLogo from './components/partnerLogo/PartnerLogo';
import Blog from './components/blog/Blog';
import Maps from './components/maps/Maps';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
     <Header/>
     <Navbar/>
     <Banner/>
     <Supplier/>
     <Services/>
     <Company/>
     <PartnerLogo/>
     <Blog/>
     <Maps/>
     <Contact/>
     <Footer/>
    </>
  );
}

export default App;
