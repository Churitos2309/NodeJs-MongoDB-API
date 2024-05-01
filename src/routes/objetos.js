const express = require("express");
const router = express.Router();
const ObjetosModelo = require("../models/objetos");
router.get("/mostrarObjetos", (req, res) => {
  ObjetosModelo
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ mensaje: error }));
});
router.get("/mostrarObjeto/:id", (req, res) => {
    const { id } = req.params;
    ObjetosModelo
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({mensaje: error}))
})
router.post("/crearObjeto", (req, res) => {
  const objeto = new ObjetosModelo(req.body);
  objeto
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ mensaje: error }));
});
router.put("/actualizarObjeto/:id", (req, res) => {
    const { id } = req.params;
    const { marca, codigo } = req.body;
    ObjetosModelo
    .updateOne({ _id: id}, { $set: { marca, codigo }})
    .then((data) => res.json(data))
    .catch((error) => res.json({mensaje: error}))
})
router.delete("/eliminarObjeto/:id", (req, res) => {
    const { id } = req.params;
    ObjetosModelo
    .deleteOne({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({mensaje: error}))
})
module.exports = router;
