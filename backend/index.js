const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;

// Middlewares
app.use(cors()); // Permitir solicitudes desde el frontend
app.use(express.json());

// Ruta de ejemplo
app.get("/api/mensaje", (req, res) => {
  res.json({ mensaje: "Hola desde el backend!" });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Backend corriendo en http://localhost:${PORT}`);
});
