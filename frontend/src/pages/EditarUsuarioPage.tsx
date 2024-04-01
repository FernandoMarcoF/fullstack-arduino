import React from 'react';
import { Sidebar } from '../components/Sidebar';
import { TopNavBar } from '../components/TopNavBar';
import { Footer } from '../components/Footer';
import { useParams } from 'react-router-dom';
import { EditarUsuario } from '../components/EditarUsuario';



export const EditarUsuarioPage: React.FC = () => {
  const { id } = useParams();
  return (
    <>
      <Sidebar />
      <TopNavBar />
      <EditarUsuario id={id ? id : ''}></EditarUsuario>
      <Footer />
    </>
  );
};
