const {Router} = require('express')
const PessoaController = require('../controllers/PessoaController')

const router = Router()

router.get('/pessoa', PessoaController.pegaTodasPessoas)
router.get('/pessoa/:id', PessoaController.pegaUmaPessoa)
router.post('/pessoa', PessoaController.criaPessoa)
router.put('/pessoa/:id', PessoaController.atualizaPessoa)
router.delete('/pessoa/:id', PessoaController.deletaPessoa)

module.exports = router