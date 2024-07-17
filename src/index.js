const express = require('express');
const { sequelize } = require('./models'); // Importa sequelize y los modelos
const usersRouter = require('./routes/users');
const authUserRoute = require('./routes/authUser');
const searchTutor = require('./routes/SearchTutor/searchTutor')
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware para procesar JSON
app.use(cors());
app.use(express.json());
app.use('/users', usersRouter);
app.use('/login', authUserRoute);
app.use('/searchTutor', searchTutor);

// Sincronizar la base de datos y luego iniciar el servidor
sequelize.sync()
  .then(() => {
    console.log('Base de datos sincronizada');
    app.listen(port, () => {
      console.log(`Servidor corriendo en http://localhost:${port}`);
    });
  })
  .catch(err => {
    console.error('No se pudo conectar a la base de datos:', err);
  });

// Rutas y lógica de la aplicación aquí...
