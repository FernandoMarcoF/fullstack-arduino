import React from 'react';
import { Sidebar } from '../components/Sidebar';
import { TopNavBar } from '../components/TopNavBar';
import { PanelCuenta } from '../components/PanelCuenta';
import { Footer } from '../components/Footer';

export const PanelPage: React.FC = () => {
  return (
    <>
      <Sidebar />
      <TopNavBar />
      <PanelCuenta />
      <Footer />
    </>
  );
};
