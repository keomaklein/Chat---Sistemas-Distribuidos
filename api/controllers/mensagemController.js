'use strict';
var banco = require('../mock/banco');
var mensagem = require('../models/mensagem');

function Mensagem() {
	this.id = 0;
  this.id_usuario_rem =  0;
  this.id_usuario_dest =  0;
	this.texto =  '';
	this.status =  0; // 0 não visualizada, 1 visualizada;
	this.data_envio =  new Date();
	this.data_visualizada =  new Date();
};

exports.criar_mensagem_chat = function(req, res) {
  var entrada = req.body;
  var msg = new Mensagem();
  msg.id_usuario_rem = entrada.id_usuario_rem,
  msg.id_usuario_dest = entrada.id_usuario_dest,
  msg.texto = entrada.mensagem,
  msg.status = 0, // 0 não visualizada, 1 visualizada
  msg.data_envio = new Date();
  msg.data_visualizada = new Date();
  banco.insereMensagem(msg)
  res.redirect('/chat/' + entrada.id_usuario_dest + '/' + entrada.id_usuario_rem);  
};

exports.criar_mensagem = function(req, res) {
  var entrada = req.body;
  var msg = new Mensagem();
  msg.id_usuario_rem = entrada.id_usuario_rem,
  msg.id_usuario_dest = entrada.id_usuario_dest,
  msg.texto = entrada.mensagem,
  msg.status = 0, // 0 não visualizada, 1 visualizada
  msg.data_envio = new Date();
  msg.data_visualizada = new Date();
  res.json(banco.insereMensagem(msg));  
};

exports.listar_mensagens = function(req, res) {
      var msg = banco.consultaMensagens();
      res.json(msg);
};

exports.consultar_mensagem = function(req, res) {
  var msg = banco.consultaMensagem(req.params.id);
  res.json(msg);
};

exports.consultar_mensagens_usuario = function(req, res) {
  var id_usuario_rem = req.params.id_usuario_rem;
  var id_usuario_dest = req.params.id_usuario_dest;

  var msg = banco.consultaMensagensUsuario(id_usuario_rem, id_usuario_dest);
  res.json(msg);
};

exports.alterar_mensagem = function(req, res) {
	var msg = 'alterar_mensagem';
   res.json(msg);
};

exports.delete_mensagem = function(req, res) {
		var msg = 'delete_mensagem';
		res.json({ message: 'delete_mensagem' });
};