const express = require("express"); 
const router = express.Router(); 
const plantaeController = require("./../controller/plantae.controller"); 

router.get('/', (req,res) => {
    res.status(200).json({message:"Fungi."});
});

router.get("/listall", plantaeController.getAll);

router.get("/listid/:id", plantaeController.getSingle);

router.post("/add", plantaeController.postCreate);

router.put("/update/:id", plantaeController.putUpdate);

router.delete("/delete/:id", plantaeController.delDelete);

module.exports = router;