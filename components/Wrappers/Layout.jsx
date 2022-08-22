import React from 'react';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import MobileMenu from 'components/MobileMenu';

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <MobileMenu />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
