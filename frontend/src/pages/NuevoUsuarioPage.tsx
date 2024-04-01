import React from 'react';
import { Sidebar } from '../components/Sidebar';
import { TopNavBar } from '../components/TopNavBar';
import { NuevoUsuario } from '../components/NuevoUsuario';
import { Footer } from '../components/Footer';

export const NuevoUsuarioPage: React.FC = () => {
  return (
    <>
      <Sidebar />
      <TopNavBar />
      <NuevoUsuario />
      <Footer />
    </>
  );
};
