const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
require("dotenv").config(); // Para variables de entorno

const app = express();
const PORT = process.env.PORT || 5000;

// Configurar CORS
app.use(cors({
  origin: process.env.NODE_ENV === "development" 
    ? "http://localhost:3000" 
    : "http://localhost:5000"
}));

// Middleware
app.use(express.json());

// Ruta de prueba
app.get("/api/mensaje", (req, res) => {
  res.json({ mensaje: "Hola desde el backend! 🚀" });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Backend corriendo en http://localhost:${PORT}`);
});