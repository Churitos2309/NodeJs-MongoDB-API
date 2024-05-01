const mongoose = require("mongoose");
const usuariosSchema = mongoose.Schema({
    nombreUsuario: {
        type: String,
        required: true,
    },
    apellidosUsuario: {
        type: String,
        required: true,
    },
    numeroDocumentoUsuario: {
        type: String,
        required: true,
    },
    correoElectronicoUsuario: {
        type: String,
        required: true,
    },
    generoUsuario: {
        type: String,
        required: true,
    },
});
module.exports = mongoose.model("UsuariosModelo", usuariosSchema);
