'use strict';
module.exports = function(app) {
var usuarioController = require('../controllers/usuarioController');
var mensagemController = require('../controllers/mensagemController');
// messages Routes

  app.route('/')
   .get(usuarioController.index);

  app.route('/logar')
  .get(usuarioController.index)
  .post(usuarioController.logar);

   app.route('/chat/:id_usuario_dest/:id_usuario_logado')
   .get(usuarioController.chat);

	app.route('/usuario')
   .get(usuarioController.listar_usuario)
   .post(usuarioController.criar_usuario);

	app.route('/usuario/:id')
   .get(usuarioController.consultar_usuario)
   .put(usuarioController.alterar_usuario)
   .delete(usuarioController.delete_usuario);


   app.route('/mensagem')
   .get(mensagemController.listar_mensagens)
   .post(mensagemController.criar_mensagem_chat);

  app.route('/mensagem/:id')
  .get(mensagemController.consultar_mensagem)
  .put(mensagemController.alterar_mensagem)
  .delete(mensagemController.delete_mensagem);

  app.route('/mensagem/:id/usuario')
  .get(mensagemController.consultar_mensagens_usuario)
};