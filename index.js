const express = require("express");  
const app = express();  
require('dotenv').config(); 
app.use(express.json());  
const port = process.env.PORT || 3000;

const conn = require("./model/conn/index"); 

conn();

app.use(cors());
app.options("*", cors()); 

app.get('/', (req,res) => {
    res.status(200).json({message:"Zoo"});
});

const animaliaRouters = require("./routers/animalia");
app.use('/animalia',animaliaRouters);

const fungiRouters = require("./routers/fungi");
app.use('/fungi',fungiRouters);

const moneraRouters = require("./routers/monera");
app.use('/monera', moneraRouters);

const plantaeRouters = require("./routers/plantae");
app.use('/plantae', plantaeRouters);

const protistaRouters = require("./routers/protista");
app.use('/protista', protistaRouters);

app.listen(port, () => {
    console.log(`Servidor rodando em: http://localhost:${port}`);
});