import { Link } from 'react-router-dom'
import axios from 'axios';
import serverData from '../../config.json'
import { removeUser } from '../redux/userSlice';
import { useDispatch } from 'react-redux';
import { Usuario } from '../interfaces/Usuario.interface';

const server = serverData.SERVER;
const port = serverData.PORT;

interface IComponenteLine {
  inputUsuario: Usuario;
}

export const LineTablaUsuarios = ({ inputUsuario }: IComponenteLine) => {
  const { id, email, fechaAlta, numSerial, status, usuario, telefono } = inputUsuario;
  const dispatch = useDispatch();

  const deleteUsuarioById = async () => {
    try {
      const respuesta = await axios.delete(`http://${server}:${port}/api/users/${id}`);
      const newListUsers = dispatch(removeUser(id));
      console.log('newListUsers->', newListUsers)
      return respuesta.data;
    } catch (error) {
      console.error('Error al eliminar el usuario:', error);
    }
  }

  return (
    <tr>
      <td><img className="rounded img-fluid avatar-40" src="/src/assets/images/user/01.jpg" alt="profile" /></td>
      <td>{usuario}</td>
      <td>{telefono}</td>
      <td>{email}</td>
      <td><span className="badge iq-bg-primary">{status}</span></td>
      <td>{numSerial}</td>
      <td>{fechaAlta}</td>

      <td>
        <div className="flex align-items-center list-user-action">
          <Link
            to={`/editarusuario/${id}`}
            className="iq-bg-primary"
            data-toggle="tooltip"
            data-placement="top"
            title='Edit'
            data-original-title="Edit"
          >
            <i className="ri-pencil-line" />
          </Link>
          <a className="iq-bg-primary" data-toggle="tooltip" data-placement="top" title='sss' data-original-title="Delete" type='button' role='button' onClick={() => { deleteUsuarioById() }}>
            <i className="ri-delete-bin-line" />
          </a>
        </div>
      </td>
    </tr>



  );
}