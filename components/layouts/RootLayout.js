import React from 'react';
import Container from '../Container';
import Footer from '../Footer';
import Navbar from '../Navbar';

const RootLayout = ({children}) => {
  return (
    <div className='bg-gray-900 text-gray-50 min-h-screen'>
      <Navbar />
      <Container>
        {children}
      </Container>
      <Footer />
    </div>
  );
};

export default RootLayout;
