const Plantae = require("../model/plantae");

exports.getAll = async (req,res) => {
    await Plantae.find({}).then((plantae) => {
        console.log(plantae);
        res.status(200).json(plantae);
    }).catch((err) => {
        res.status(404).json({message:"Não foi possível encontrar."});
        console.error(err);
    });
};

exports.getSingle = async (req,res) => {
    const nome = req.params.id;
    await Plantae.find({ _id:nome }).then((Plantae) => { 
        console.log(Plantae);
        if(Plantae == null){ 
            res.status(404).json({message: "Não foi possível encontrar."});
        }else{
            res.status(200).json(Plantae);
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
    else if(!req.body.continente){
        res.status(400).json({message: "Por favor, preencha o continente na requisição."});
        return; 
    }
    else if(!req.body.distribuicaoGeografica){
        res.status(400).json({message: "Por favor, preencha a distribuição geográfica na requisição."});
        return; 
    }
    else if(!req.body.habitat){
        res.status(400).json({message: "Por favor, preencha o habitat na requisição."});
        return; 
    }

    await Plantae.create(req.body).then(() => {
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
    else if(!req.body.continente){
        res.status(400).json({message: "Por favor, preencha o continente na requisição."});
        return; 
    }
    else if(!req.body.distribuicaoGeografica){
        res.status(400).json({message: "Por favor, preencha a distribuição geográfica na requisição."});
        return; 
    }
    else if(!req.body.habitat){
        res.status(400).json({message: "Por favor, preencha o habitat na requisição."});
        return; 
    }

    await Plantae.updateOne({ _id:id},req.body).then(() => { 
        res.status(200).json({message: "Atualizado com sucesso!"});
    }).catch((err) => {
        console.error(err);
        res.status(400).json({message: "Erro!"});
    });
};

exports.delDelete = async (req,res) => {
    if( req.params.id.length == 24){ 
        await Plantae.deleteOne({_id:req.params.id}).then(() => { 
            res.status(200).json({message: "Deletado com sucesso!"});
        }).catch((err) => {
            console.error(err);
            res.status(400).json({message: "Erro!"});
        });
    }else{
        res.status(400).json({message: "O id precisa ter pelo menos 24 caracteres."});
    }
};