import React from 'react';
import Navigation from './navigation/Navigation';
function Layout({ children }) {
  return (
    <>
      <Navigation />
      {children}
    </>
  );
}

export default Layout;
