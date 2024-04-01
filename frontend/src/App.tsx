import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PanelPage } from './pages/PanelPage';
import { NuevoUsuarioPage } from './pages/NuevoUsuarioPage';
import { ListaUsuariosPage } from './pages/ListaUsuariosPage';
import { EditarUsuarioPage } from './pages/EditarUsuarioPage';
import { SignInPage } from './pages/SignInPage';

export const App: React.FC = () => {
  return (
    <Router>
      <Routes> {/* Use Routes instead of Route */}
        <Route path="/" element={<SignInPage />} /> {/* Use element prop */}
        <Route path="/panel" element={<PanelPage />} /> {/* Use element prop */}
        <Route path="/nuevousuario" element={<NuevoUsuarioPage />} /> {/* Use element prop */}
        <Route path="/listausuario" element={<ListaUsuariosPage />} /> {/* Use element prop */}
        <Route path="/editarusuario/:id" element={<EditarUsuarioPage />} /> {/* Use element prop */}
      </Routes>
    </Router>
  );
};
