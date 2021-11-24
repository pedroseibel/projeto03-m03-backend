const mongoose = require("mongoose");  //Imports Mongoose

const moneraModel = new mongoose.Schema({ //Creates the DB
    nome: { type: String, required: true }, 
    especie: { type: String, required: true },
    dataCriacao: { type: Date, default: Date.now } //Set to default value
});

const Monera = mongoose.model("Monera", moneraModel); //Creates the model in the Cities collection

module.exports = Monera; //Exports the finished model