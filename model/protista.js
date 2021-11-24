const mongoose = require("mongoose");  //Imports Mongoose

const protistaModel = new mongoose.Schema({ //Creates the DB
    nome: { type: String, required: true }, 
    especie: { type: String, required: true },
    dataCriacao: { type: Date, default: Date.now } //Set to default value
});

const Protista = mongoose.model("Protista", protistaModel); //Creates the model in the Cities collection

module.exports = Protista; //Exports the finished model