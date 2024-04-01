import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';
import { RootState } from '../redux/userSlice';
import serverData from '../../config.json'
import { editUser } from '../redux/userSlice';
import { Usuario } from '../interfaces/Usuario.interface';

const server = serverData.SERVER;
const port = serverData.PORT;

interface IComponenteLine {
  id: string;
}

export const EditarUsuario = ({ id }: IComponenteLine) => {
  const [form, setForm] = useState<Usuario>({
    email: '', fechaAlta: '', numSerial: '', status: '', telefono: '', usuario: ''
  });
  const { email, fechaAlta, numSerial, status, usuario, telefono } = form;

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const users: Usuario[] = useSelector((state: RootState) => state.user);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const respuesta = await axios.put(`http://${server}:${port}/api/users/${id}`, form, {
        headers: {
          "Content-Type": "application/json",
        }
      });
      dispatch(editUser(form));
      navigate('/listausuario');
      return respuesta.data;
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    const userId = users.filter(user => user.id === id);
    setForm(userId[0]);
  }, [id, users]);


  const onInputChange = ({ target }: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => { //en vez de pasar e con todos sus valores, le pasas el campo que te interesa 'target'
    //console.log(target);
    const { id, value } = target;
    setForm({
      ...form,
      [id]: value
    });
  };

  return (
    <div id="content-page" className="content-page">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title">Editar información del usuario</h4>
                </div>
              </div>
              <div className="iq-card-body">
                <div className="new-user-info">
                  <form onSubmit={onSubmit}>
                    <div className="row">
                      <div className="form-group col-md-6">
                        <label htmlFor="fname">Nombre Completo</label>
                        <input type="text" className="form-control" id="usuario" placeholder="Nombre Completo" value={usuario} onChange={onInputChange} />
                      </div>
                      <div className="form-group col-md-6">
                        <label htmlFor="pno">Tarjeta RFID:</label>
                        <input type="text" className="form-control" id="numSerial" placeholder="Tarjeta RFID" value={numSerial} onChange={onInputChange} />
                      </div>
                      <div className="form-group col-md-6">
                        <label htmlFor="mobno">Teléfono:</label>
                        <input type="text" className="form-control" id="telefono" placeholder="Número de Teléfono" value={telefono} onChange={onInputChange} />
                      </div>
                      <div className="form-group col-md-6">
                        <label htmlFor="altconno">Fecha de Alta</label>
                        <input type="date" className="form-control" id="fechaAlta" value={fechaAlta} onChange={onInputChange} />
                      </div>
                      <div className="form-group col-md-6">
                        <label htmlFor="email">Correo electrónico:</label>
                        <input type="email" className="form-control" id="email" placeholder="Correo electrónico" value={email} onChange={onInputChange} />
                      </div>
                      <div className="form-group col-sm-6">
                        <label>Status:</label>
                        <select className="form-control" id="status" value={status} onChange={onInputChange}>
                          <option>Seleccionar estado</option>
                          <option value='Activo' >Activo</option>
                          <option value='Inactivo'> Inactivo</option>
                          <option value='Pendiente'>Pendiente</option>
                        </select>
                      </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Editar usuario</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

