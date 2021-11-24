const mongoose = require("mongoose");  //Imports Mongoose

const fungiModel = new mongoose.Schema({ //Creates the DB
    nome: { type: String, required: true }, 
    especie: { type: String, required: true },
    continente: {type: String, required: true},
    distribuicaoGeografica: {type: String, required: true},
    habitat: {type: String, required: true},
    dataCriacao: { type: Date, default: Date.now } //Set to default value
});

const Fungi = mongoose.model("Fungi", fungiModel); //Creates the model in the Cities collection

module.exports = Fungi; //Exports the finished model