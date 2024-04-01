import React from 'react';
import { Sidebar } from '../components/Sidebar';
import { TopNavBar } from '../components/TopNavBar';
import { ListaUsuarios } from '../components/ListaUsuarios';
import { Footer } from '../components/Footer';

export const ListaUsuariosPage: React.FC = () => {
  return (
    <>
      <Sidebar />
      <TopNavBar />
      <ListaUsuarios />
      <Footer />
    </>
  );
};
