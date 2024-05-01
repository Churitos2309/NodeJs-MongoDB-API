const express = require("express");
const router = express.Router();
const UsuariosModelo = require("../models/usuarios");
router.get("/mostrarUsuarios", (req, res) => {
  UsuariosModelo
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ mensaje: error }));
});
router.get("/mostrarUsuario/:id", (req, res) => {
  const { id } = req.params;
  UsuariosModelo
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ mensaje: error }));
});
router.post("/crearUsuario", (req, res) => {
  const usuario = new UsuariosModelo(req.body);
  usuario
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ mensaje: error }));
});
router.put("/actualizarUsuario/:id", (req, res) => {
  const { id } = req.params;
  const { nombre, apellidos, numeroDocumento, correoElectronico, genero } =
    req.body;
  UsuariosModelo
    .updateOne(
      { _id: id },
      { $set: { nombre, apellidos, numeroDocumento, correoElectronico, genero } }
    )
    .then((data) => res.json(data))
    .catch((error) => res.json({ mensaje: error }));
});
router.delete("/eliminarUsuario/:id", (req, res) => {
  const { id } = req.params;
  UsuariosModelo
    .deleteOne({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ mensaje: error }));
});
module.exports = router;
