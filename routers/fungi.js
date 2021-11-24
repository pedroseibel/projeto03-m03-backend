const express = require("express"); 
const router = express.Router(); 
const fungiController = require("./../controller/fungi.controller"); 

router.get('/', (req,res) => {
    res.status(200).json({message:"Fungi."});
});

router.get("/listall", fungiController.getAll);

router.get("/listid/:id", fungiController.getSingle);

router.post("/add", fungiController.postCreate);

router.put("/update/:id", fungiController.putUpdate);

router.delete("/delete/:id", fungiController.delDelete);

module.exports = router;