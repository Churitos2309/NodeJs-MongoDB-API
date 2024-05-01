const mongoose = require("mongoose");
const objetosSchema = mongoose.Schema({
    marcaObjeto: {
        type: String,
        required: true,
    },
    codigoObjeto: {
        type: String,
        required: true,
    },
});
module.exports = mongoose.model("ObjetosModelo", objetosSchema);
