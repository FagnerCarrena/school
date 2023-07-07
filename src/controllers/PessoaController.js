const database = require('../models');

class PessoaController{
static async pegaTodasPessoas(req, res){
    try {
const todasAsPessoas = await database.pessoas.findAll()
//findAll metodo do sequeliza que substitui o sql
return res.status(200).json(todasAsPessoas)
    } catch (error) {
        return res.status(500).json(error.message)
    }
}

static async pegaUmaPessoa(req,res){
const {id} = req.params;

try {
    const umaPessoa = await database.pessoas.findOne({where: {id:Number(id)}})
    return res.status(200).json(umaPessoa)

} catch (error) {
       return res.status(500).json(error.message)
}
}
static async criaPessoa(req, res){
const novaPessoa= req.body;

try {
const novaPessoaCriada = await database.pessoas.create(novaPessoa)
return res.status(201).json(novaPessoaCriada)

    
} catch (error) {
    return res.status(500).json(error.message)
}
}

static async atualizaPessoa(req, res){
    const novasInfos= req.body;
    const {id} = req.params;

try {
    await database.pessoas.update(novasInfos, { where:{id:Number(id)}} )
    
    const pessoaAtualizada = await database.pessoas.findOne({where: {id:Number(id)}})

    return res.status(200).json(pessoaAtualizada)
} catch (error) {
    return res.status(500).json(error.message)
}}

static async deletaPessoa(req, res){
 const {id} = req.params;
 try {
    await database.pessoas.destroy({where: {id:Number(id)}})
    return res.status(200).json({mensagem: "Registro deletado com sucesso!"})  

 } catch (error) {
    return res.status(500).json(error.message)
 }
}



}
module.exports = PessoaController