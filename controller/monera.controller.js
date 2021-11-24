const Monera = require("../model/monera");

exports.getAll = async (req,res) => {
    await Monera.find({}).then((monera) => {
        console.log(monera);
        res.status(200).json(monera);
    }).catch((err) => {
        res.status(404).json({message:"Não foi possível encontrar."});
        console.error(err);
    });
};

exports.getSingle = async (req,res) => {
    const nome = req.params.id;
    await Monera.findOne({ _id:nome }).then((Monera) => { 
        console.log(Monera);
        if(Monera == null){ 
            res.status(404).json({message: "Não foi possível encontrar."});
        }else{
            res.status(200).json(Monera);
        }
    }).catch((err) => {
        res.status(404).json({message:"Não foi possível encontrar."});
        console.error(err);
    });
};

exports.postCreate = async (req,res) => { 

    if (!req.body.nome) {
        res.status(400).json({message: "Por favor, preencha o nome na requisição."});
        return;
    } else if (!req.body.especie) {
        res.status(400).json({message: "Por favor, preencha a espécie na requisição."});
        return;
    }

    await Monera.create(req.body).then(() => {
        res.status(200).json({message: "Cadastrado com sucesso!"});
    }).catch((err) => {
        res.status(400).json({message: "Erro!"});
        console.error(err);
    })
};

exports.putUpdate = async (req,res) => {
    const id = req.params.id;
    if(!req.body.nome){
        res.status(400).json({message: "Por favor, preencha o nome na requisição."});
        return;
    }else if(!req.body.especie){
        res.status(400).json({message: "Por favor, preencha a espécie na requisição."});
        return;
    }

    await Monera.updateOne({ _id:id},req.body).then(() => { 
        res.status(200).json({message: "Atualizado com sucesso!"});
    }).catch((err) => {
        console.error(err);
        res.status(400).json({message: "Erro!"});
    });
};

exports.delDelete = async (req,res) => {
    if( req.params.id.length == 24){ 
        await Monera.deleteOne({_id:req.params.id}).then(() => { 
            res.status(200).json({message: "Deletado com sucesso!"});
        }).catch((err) => {
            console.error(err);
            res.status(400).json({message: "Erro!"});
        });
    }else{
        res.status(400).json({message: "O id precisa ter pelo menos 24 caracteres."});
    }
};