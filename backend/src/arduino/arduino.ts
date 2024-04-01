import { SerialPort } from 'serialport';
import { ReadlineParser } from '@serialport/parser-readline';
import { db } from '../config/firebaseConfig'; // Importar la instancia de Firestore

let arduinoSerialPort: SerialPort;
let parser: ReadlineParser;

export const enviarDatosArduino = (data: string) => {
    arduinoSerialPort.write(data, (err) => {
        if (err) {
            console.error('Error al enviar datos al Arduino:', err);
        } else {
            console.log('Datos enviados al Arduino:', data);
        }
    });
};

export const initArduino = async () => {
    const ports = await SerialPort.list();
    const portArduino = ports.map(port => {
        if (port.manufacturer && port.manufacturer.includes('arduino')) {
            return port;
        }
    });

    if(portArduino[0]?.path){
        arduinoSerialPort = new SerialPort({ path: portArduino[0].path, baudRate: 9600 });
        arduinoSerialPort.pipe(new ReadlineParser({ delimiter: '\r\n' }));

        await arduinoSerialPort.on('open', () => {
            console.log('Conexión con placa Arduino establecida');
        });
        return true;
    }
    return false;
};

export const recibirDatosArduino = async () => {
    parser.on('data', async (data) => {
        try {
            const datosArduino = await data.toString();
            if (datosArduino) {
                buscarNumSerialArduino(datosArduino);
            }
        } catch (err) {
            console.log('Error al recibir datos de arduino: ', err);
        }
    });
};

export const buscarNumSerialArduino = async (inputDato: string) => {
    try {
        console.log('Datos arduino-->', inputDato);

        const usuariosRef = db.collection('usuarios');
        const snapshot = await usuariosRef.where('numSerial', '==', inputDato).get();
        if (snapshot.empty) {
            console.log('No encontrado');
            enviarDatosArduino('denegado');
            return 'No encontrado';
        }

        snapshot.forEach(doc => {
            const usuario = doc.data().usuario;
            enviarDatosArduino(` ${usuario}`);
            return doc.data().usuario;
        });

    } catch (error) {
        console.error('Error buscarNumSerialArduino', error);
    }
};
