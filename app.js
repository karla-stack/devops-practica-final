const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hola Mundo - DevOps CI/CD Practica Final');
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'Aplicacion funcionando correctamente' });
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });
}

module.exports = app;