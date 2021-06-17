
import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

import TopNavbarNew from '../components/TopNavbarNew';


const Layout = ({children}) => {
  return (
      <React.Fragment>
          <Header >
            <TopNavbarNew />
          </Header>
          {children}
          <Footer />
      </React.Fragment>
  );
}
 
export default Layout;