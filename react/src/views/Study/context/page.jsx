/* eslint-disable */

import React from 'react';
import Content from './content.jsx';
import Footer from './footer.jsx';
import Header from './header.jsx';

const Page = () => {
    return (
      <div className="page">
          <Header/>
          <Content/>
          <Footer/>
      </div>
    );
};

export default Page;