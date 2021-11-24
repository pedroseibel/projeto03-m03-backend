const Protista = require("../model/protista");

exports.getAll = async (req,res) => {
    await Protista.find({}).then((protista) => {
        console.log(protista);
        res.status(200).json(protista);
    }).catch((err) => {
        res.status(404).json({message:"Não foi possível encontrar."});
        console.error(err);
    });
};

exports.getSingle = async (req,res) => {
    const nome = req.params.id;
    await Protista.findOne({ _id:nome }).then((Protista) => { 
        console.log(Protista);
        if(Protista == null){ 
            res.status(404).json({message: "Não foi possível encontrar."});
        }else{
            res.status(200).json(Protista);
        }
    }).catch((err) => {
        res.status(404).json({message:"Não foi possível encontrar."});
        console.error(err);
    });
};

exports.postCreate = async (req,res) => { 

    if(!req.body.nome){
        res.status(400).json({message: "Por favor, preencha o nome na requisição."});
        return;
    }else if(!req.body.especie){
        res.status(400).json({message: "Por favor, preencha a espécie na requisição."});
        return;
    }

    await Protista.create(req.body).then(() => {
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

    await Protista.updateOne({ _id:id},req.body).then(() => { 
        res.status(200).json({message: "Atualizado com sucesso!"});
    }).catch((err) => {
        console.error(err);
        res.status(400).json({message: "Erro!"});
    });
};

exports.delDelete = async (req,res) => {
    if( req.params.id.length == 24){ 
        await Protista.deleteOne({_id:req.params.id}).then(() => { 
            res.status(200).json({message: "Deletado com sucesso!"});
        }).catch((err) => {
            console.error(err);
            res.status(400).json({message: "Erro!"});
        });
    }else{
        res.status(400).json({message: "O id precisa ter pelo menos 24 caracteres."});
    }
};