// const express = require('express');
// const mongoose = require('mongoose');
// require("dotenv").config();
// const userRoutes = require("./routes/user");



// const app = express();
// const port = process.env.PORT || 9000;


// //middleware

// app.use(express.json());
// app.use('/api', userRoutes);


// //Rutas

// app.get("/", (req, res) => {
//     res.send("Bienvenido a mi API");
// })

// //MongoDB conexion

// mongoose
//     // .connect("mongodb+srv://JuanOchoa:ANA2000JUAN@cluster0.cof4rpm.mongodb.net/");
//     .connect(process.env.MONGODB_URI)
//     .then(() => console.log("Conectado a la base de datos MongoDB Atlas"))
//     .catch((error) => console.error(error));
// app.listen(port, () => console.log("El servidor esta escuchando en el puerto", port));








const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const routesUsuarios = require("./routes/usuarios");
const routesFichas = require("./routes/fichas");
const routesObjetos = require("./routes/objetos");

const app = express();

const puerto = process.env.PORT || 9000;

app.use(express.json());
app.use("/ReconocimientoFacial/usuarios", routesUsuarios);
app.use("/ReconocimientoFacial/fichas", routesFichas);
app.use("/ReconocimientoFacial/objetos", routesObjetos);

app.get("/", (req, res) => {
  res.send("Bienvenido a la API del proyecto de Reconocimiento Facial");
});

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Conectado a MongoDB Atlas"))
  .catch((error) => console.error("Error al conectar a MongoDB.", error));

app.listen(puerto, () =>
  console.log("El servidor está escuchando en el puerto", puerto)
);
