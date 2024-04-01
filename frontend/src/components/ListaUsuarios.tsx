import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { RootState } from '../redux/userSlice';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import serverData from '../../config.json'
import { LineTablaUsuarios } from './LineTablaUsuarios';
import { Usuario } from '../interfaces/Usuario.interface';
import { addUsers } from '../redux/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const server = serverData.SERVER;
const port = serverData.PORT;
let waitRespuesta = false;

export const ListaUsuarios: React.FC = () => {
  const [page, setPage] = useState<number>(0);
  const [cont, setCont] = useState<number>(0);
  const [usersPerPage, setusersPerPage] = useState<number>(5);
  const [status, setStatus] = useState<number>(0);
  const [errorFetch, setErrorFetch] = useState<boolean>(false);
  const [filter, setFilter] = useState<string>('');

  const getUsuarios = async () => {
    if (users.length === 0 && !waitRespuesta) {
      try {
        waitRespuesta = true;
        const respuesta = await axios.get<Usuario[]>(`http://${server}:${port}/api/users`);
        const { status, data } = respuesta;

        dispatch(addUsers(data));
        setStatus(status);
        setErrorFetch(false);
        return data;
      } catch (error) {
        setErrorFetch(true);
      }
    } else {
      setStatus(200);
      setErrorFetch(false);
    }
  };

  const getUsers = () => {
    if (filter === '') {
      return users;
    } else {
      return users.filter(user => user.usuario.toLowerCase().includes(filter.toLowerCase()));
    }
  }

  const getNumPages = () => {
    const users = getUsers();
    return (users.length % usersPerPage === 0) ? Math.floor(users.length / usersPerPage) : Math.floor(users.length / usersPerPage) + 1;
  }

  const chagePage = (inputPage: number) => {
    setPage(inputPage);
    setCont(inputPage * usersPerPage);
  }

  const getNumResults = () => {
    const users = getUsers();
    if (users.length > 0) {
      return (
        <span>Mostrando {cont + 1} a {users.length <= cont + usersPerPage ? users.length : cont + usersPerPage} de {users.length} entradas</span>
      )
    } else {
      return <span>Ningun resultado con "{filter}"</span>
    }
  }

  const dispatch = useDispatch();
  const users: Usuario[] = useSelector((state: RootState) => state.user);
  const numPages = getNumPages();

  useEffect(() => {
    getUsuarios().then(() => {
      waitRespuesta = false;
    })
  }, []);

  const generarPDF = () => {
    const input = document.getElementById('user-list-table');
    console.log('input-->', input);
    if (input) {
      html2canvas(input)
        .then((canvas) => {
          const imgData = canvas.toDataURL('image/png');
          const pdf = new jsPDF();
          const imgWidth = 210;
          const imgHeight = (canvas.height * imgWidth) / canvas.width;

          pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
          pdf.save('tabla.pdf');
        });
    }
  }

  return (
    <div id="content-page" className="content-page">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div className="iq-card">
              <div className="iq-card-body">
                <div className="table-responsive">
                  <div className="row justify-content-between" style={{ margin: '0' }}>
                    <div className="col-sm- col-md-5">
                      <div id="user_list_datatable_info" className="dataTables_filter">
                        <form className="mr-3 position-relative">
                          <div className="form-group mb-0">
                            <input type="search" className="form-control" id="inputSearch" placeholder="Buscar" aria-controls="user-list-table"
                              value={filter} onChange={(event) => { setFilter(event.target.value) }} />
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="col-sm-2 col-md-1">
                      <select className="form-control" id="usersPerPage" style={{ textAlign: 'center' }}
                        value={usersPerPage} onChange={(event) => { setusersPerPage(parseInt(event.target.value, 10)) }}>
                        <option value={5} >5</option>
                        <option value={10}>10</option>
                        <option value={50}>50</option>
                      </select>
                    </div>
                    <div className="col-sm-12 col-md-6">
                      <div className="user-list-files d-flex float-right">
                        <Link to="/nuevousuario" className="iq-bg-primary">
                          Agregar usuario
                        </Link>
                        <a type='button' className="iq-bg-primary" onClick={generarPDF}>
                          Pdf
                        </a>
                      </div>
                    </div>
                  </div>
                  <table id="user-list-table" className="table table-striped table-bordered mt-4" role="grid" aria-describedby="user-list-page-info">
                    <thead className="text-center">
                      <tr>
                        <th>Profile</th>
                        <th>Nombre</th>
                        <th>Contacto</th>
                        <th>Correo electrónico</th>
                        <th>Status</th>
                        <th>Tarjeta RFID</th>
                        <th>Fecha de Alta</th>
                        <th>Acción</th>
                      </tr>
                    </thead>
                    <tbody className="text-center">
                      {errorFetch && (
                        <div className="alert alert-danger" role="alert">
                          No se ha podido establecer la conexión con el recurso solicitado
                        </div>
                      )}
                      {status === 200 && (
                        filter !== ''
                          ? users.filter(user => user.usuario.toLowerCase().includes(filter.toLowerCase())).map((user, index) => (
                            ((cont < index + 1) && (index < ((cont * page) + usersPerPage))) &&
                            <LineTablaUsuarios inputUsuario={user} key={`user_${index}`} />
                          ))
                          : users.map((user, index) => (
                            ((cont < index + 1) && (index < ((cont * page) + usersPerPage))) &&
                            <LineTablaUsuarios inputUsuario={user} key={`user_${index}`} />
                          ))
                      )}
                    </tbody>
                  </table>
                </div>
                <div className="row justify-content-between mt-3">
                  <div id="user-list-page-info" className="col-md-6">
                    {getNumResults()}
                  </div>
                  {numPages > 1 &&
                    <div className="col-md-6">
                      <nav aria-label="Page navigation">
                        <ul className="pagination justify-content-end mb-0">
                          <li className={(page > 0) ? "page-item" : "page-item disabled"} >
                            <a className="page-link" href="#" type='button' onClick={() => chagePage(page - 1)} >Atrás</a>
                          </li>
                          {
                            Array.from({ length: numPages }, (_, index) => (
                              <li key={index} className={(index === page) ? "page-item active" : "page-item"}>
                                <a className="page-link" href="#" type='button' onClick={() => chagePage(index)}>{index + 1}</a>
                              </li>
                            ))}
                          <li className={(page < numPages - 1) ? "page-item" : "page-item disabled"}>
                            <a className="page-link" href="#" type='button' onClick={() => chagePage(page + 1)}>Siguiente</a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}