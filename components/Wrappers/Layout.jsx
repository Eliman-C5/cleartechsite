import React from 'react';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import MobileMenu from 'components/MobileMenu';
import ContactModal from 'components/Modals/ContactUs';

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <MobileMenu />
      {children}
      <ContactModal />
      <Footer />
    </div>
  );
};

export default Layout;
