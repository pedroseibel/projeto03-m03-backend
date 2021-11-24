const express = require("express"); 
const router = express.Router(); 
const moneraController = require("./../controller/monera.controller"); 

router.get('/', (req,res) => {
    res.status(200).json({message:"Fungi."});
});

router.get("/listall", moneraController.getAll);

router.get("/listid/:id", moneraController.getSingle);

router.post("/add", moneraController.postCreate);

router.put("/update/:id", moneraController.putUpdate);

router.delete("/delete/:id", moneraController.delDelete);

module.exports = router;