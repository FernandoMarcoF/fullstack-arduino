import { useState, FormEvent } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import serverData from '../../config.json'
import { Usuario } from '../interfaces/Usuario.interface';
import { addUsers } from '../redux/userSlice';

const server = serverData.SERVER;
const port = serverData.PORT;


export const NuevoUsuario = () => {
  const [numSerial, setNumSerial] = useState('');
  const [usuario, setUsuario] = useState('');
  const [telefono, setTelefono] = useState('');
  const [fechaAlta, setFechaAlta] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(''); // Add state for status field

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const insertarUsuario = async (inputUser: Usuario) => {
    try {
      const respuesta = await axios.post(`http://${server}:${port}/api/users`, inputUser, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      dispatch(addUsers([inputUser]));
      navigate('/listausuario');
      return respuesta.data;
    } catch (error) {
      console.error('Error al crear el usuario:', error);
    }
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {

    e.preventDefault();
    insertarUsuario({ numSerial, usuario, telefono, fechaAlta, email, status });

    // Limpiar el formulario
    setNumSerial('');
    setUsuario('');
    setTelefono('');
    setFechaAlta('');
    setEmail('');
    setStatus('');

  };

  return (
    <div id="content-page" className="content-page">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title">Información de nuevo usuario</h4>
                </div>
              </div>
              <div className="iq-card-body">
                <div className="new-user-info">
                  <form id="rfid-form" onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="form-group col-md-6">
                        <label htmlFor="fname">Nombre Completo:</label>
                        <input type="text" className="form-control" id="fname" placeholder="Nombre Completo" value={usuario} onChange={e => setUsuario(e.target.value)} />
                      </div>
                      <div className="form-group col-md-6">
                        <label htmlFor="pno">Tarjeta RFID:</label>
                        <input type="text" className="form-control" value={numSerial} placeholder="Tarjeta RFID" onChange={e => setNumSerial(e.target.value)} />
                      </div>
                      <div className="form-group col-md-6">
                        <label htmlFor="mobno">Teléfono:</label>
                        <input type="text" className="form-control" id="mobno" placeholder="Número de Teléfono" value={telefono} onChange={e => setTelefono(e.target.value)} />
                      </div>
                      <div className="form-group col-md-6">
                        <label htmlFor="altconno">Fecha de Alta:</label>
                        <input type="date" className="form-control" id="altconno" value={fechaAlta} onChange={e => setFechaAlta(e.target.value)} />
                      </div>
                      <div className="form-group col-md-6">
                        <label htmlFor="email">Correo electrónico:</label>
                        <input type="email" className="form-control" id="email" placeholder="Correo electrónico" value={email} onChange={e => setEmail(e.target.value)} />
                      </div>
                      <div className="form-group col-sm-6">
                        <label htmlFor="selectcountry">Status:</label>
                        <select className="form-control" id="selectcountry" value={status} onChange={e => setStatus(e.target.value)}>
                          <option>Seleccionar estado</option>
                          <option>Activo</option>
                          <option>Inactivo</option>
                          <option>Pendiente</option>
                        </select>
                      </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Agregar nuevo usuario</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}