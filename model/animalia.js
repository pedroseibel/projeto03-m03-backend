const mongoose = require("mongoose");  //Imports Mongoose

const animaliaModel = new mongoose.Schema({ //Creates the DB
    nome: { type: String, required: true }, 
    especie: { type: String, required: true },
    continente: {type: String, required: true},
    distribuicaoGeografica: {type: String, required: true},
    habitat: {type: String, required: true},
    estadoConservacao: {type: String, required: true},
    dataCriacao: { type: Date, default: Date.now } //Set to default value
});

const Animalia = mongoose.model("Animalia", animaliaModel); //Creates the model in the Cities collection

module.exports = Animalia; //Exports the finished model