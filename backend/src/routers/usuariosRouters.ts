import { Router } from 'express';
import { db } from '../config/firebaseConfig'; // Importar la instancia de Firestore

export const usuariosRouter = Router();

// Aquí db estará disponible para usar
usuariosRouter.get('/', async (req, res) => {
  try {
    const querySnapshot = await db.collection('usuarios').get();
    const users = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    res.send(users);
  } catch (error) {
    console.error('Error al obtener datos de la colección "usuarios":', error);
    res.status(500).json({message: 'Error interno del servidor'});
  }
});

usuariosRouter.get('/:id', async (req, res) => {
  const id = req.params.id;
  console.log(id);
  try {
    res.send((await db.collection('usuarios').doc(id).get()).data());
  } catch (error) {
    console.error('Error al obtener datos de la colección "usuarios":', error);
    res.status(500).json({message: 'Error interno del servidor'});
  }
});


usuariosRouter.post('/', async (req, res) => {
  const usuario = req.body;
  try {
    await db.collection('usuarios').add({
      ...usuario
    });
    res.json({ message: 'Usuario agregado' });
  } catch (error) {
    console.error('Error al agregar datos de la colección "usuarios":', error);
    res.status(500).json({message: 'Error interno del servidor'});
  }
});


usuariosRouter.put('/:id', async (req, res) => {
  const id = req.params.id;
  const data = req.body;
  try {
    await db.collection('usuarios').doc(id).update(data);
    res.json({message: 'Usuario actualizado'});
  } catch (error) {
    console.error('Error al obtener datos de la colección "usuarios":', error);
    res.status(500).json({message: `Error interno del servidor', ${data}`});
  }
});


usuariosRouter.delete('/:id', async (req, res) => {
  try {
    await db.collection('usuarios').doc(req.params.id).delete();
    res.json({message: 'Usuario eliminado'});

  } catch (error) {
    console.error('Error al obtener datos de la colección "usuarios":', error);
    res.status(500).json({message: 'Error interno del servidor'});
  }
});


