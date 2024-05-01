const express = require("express");
const router = express.Router();
const FichasModelo = require("../models/fichas");
router.get("/mostrarFichas", (req, res) => {
    FichasModelo
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({mensaje: error}))
})
router.get("/mostrarFicha/:id", (req, res) => {
    const { id } = req.params;
    FichasModelo
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({mensaje: error}))
})
router.post("/crearFicha", (req, res) => {
  const ficha = new FichasModelo(req.body);
  ficha
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ mensaje: error }));
});
router.put("/actualizarFicha/:id", (req, res) => {
    const { id } = req.params;
    const { numeroFicha, aprendicesActuales, aprendicesMatriculados, jornada, tipoFormacion } = req.body;
    FichasModelo
    .updateOne({ _id: id }, { $set: {numeroFicha, aprendicesActuales, aprendicesMatriculados, jornada, tipoFormacion }})
    .then((data) => res.json(data))
    .catch((error) => res.json({mensaje: error}))
})
router.delete("/eliminarFicha/:id", (req, res) => {
    const { id } = req.params;
    FichasModelo
    .deleteOne({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ mensaje: error }))
})
module.exports = router;
