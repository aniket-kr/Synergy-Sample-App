import { Container } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

interface LayoutProps {
  stretch?: boolean;
}

const Layout = ({ stretch = false }: LayoutProps) => {
  const ContainedOutlet = () => (
    <Container>
      <Outlet />
    </Container>
  );

  return (
    <>
      <Navbar />
      {!stretch ? <ContainedOutlet /> : <Outlet />}
    </>
  );
};

export default Layout;
