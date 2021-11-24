const express = require("express"); 
const router = express.Router(); 
const protistaController = require("./../controller/protista.controller"); 

router.get('/', (req,res) => {
    res.status(200).json({message:"Fungi."});
});

router.get("/listall", protistaController.getAll);

router.get("/listid/:id", protistaController.getSingle);

router.post("/add", protistaController.postCreate);

router.put("/update/:id", protistaController.putUpdate);

router.delete("/delete/:id", protistaController.delDelete);

module.exports = router;