import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import path from 'path';
import cors from 'cors';
import { usuariosRouter } from './routers/usuariosRouters';
import { initArduino, recibirDatosArduino } from './arduino/arduino';

dotenv.config();

//const HOST = '192.168.0.152'; // Tu dirección IP local
const port = process.env.PORT || 3003;
// Usa el valor de HOST definido en el archivo .env, o 'localhost' como valor predeterminado
const host = process.env.HOST || 'localhost';

const app = express();
app.disable('x-powered-by');
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(process.cwd(), '/src/public')));

initArduino().then((result) => {
  result ? recibirDatosArduino(): console.log('Placa arduino no encontrada');
});

app.use('/api/users', usuariosRouter);

app.listen(port, () => {
  console.log(`Servidor corriendo en http://${host}:${port}/`);
});

