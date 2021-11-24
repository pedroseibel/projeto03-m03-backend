const express = require("express"); 
const router = express.Router(); 
const animaliaController = require("./../controller/animalia.controller"); 

router.get('/', (req,res) => {
    res.status(200).json({message:"Animalia."});
});

router.get("/listall", animaliaController.getAll);

router.get("/listid/:id", animaliaController.getSingle);

router.post("/add", animaliaController.postCreate);

router.put("/update/:id", animaliaController.putUpdate);

router.delete("/delete/:id", animaliaController.delDelete);

module.exports = router;