const express = require('express');
const app = express();
const PORT = 3001; // El puerto donde vivirá tu API

app.use(express.json());

app.get('/zerviz_examen', (req, res) => {
    console.log("¡Alguien consultó el examen!"); // Log para ti
    
    // Enviar respuesta JSON
    res.status(200).json({
        mensaje: "Hola desde Express",
        tecnologia: "Node.js",
        estado: "Aprobado"
    });
});

app.listen(PORT, () => {
    console.log(`Servidor Node corriendo en http://localhost:${PORT}`);
});

//enpoint nuevo

app.get("/saludo", (req, res) => {
  res.status(200).json({ mensaje: "Hola desde mi API" });
});

  app.post("/adios", (req, res) => {
    const { nombre } = req.body;
    res.status(200).json({ mensaje: `Adiós, ${nombre}!` });
  });

app.post("/despedida", (req, res) => {
  const { nombre } = req.body;
  res.status(200).json({ mensaje: `nuevo, ${nombre}!` });
});


//new post

app.get("/nuevo", (req, res) => {
  res.status(200).json({ mensaje: "aqui" });
});

app.post("/nuevopost", (req, res) => {
  const { nombre } = req.body;
  res.status(200).json({ mensaje: `post nuevo para ver, ${nombre}!` });
});

