const mongoose = require("mongoose");
const fichasSchema = mongoose.Schema({
    numeroFicha: {
        type: String,
        required: true
    },
    aprendicesActuales: {
        type: Number,
        required: true
    },
    aprendicesMatriculados: {
        type: Number,
        required: true
    },
    jornada: {
        type: String,
        required: true
    },
    tipoFormacion: {
        type: String,
        required: true
    },
});
module.exports = mongoose.model("FichasModelo", fichasSchema);
