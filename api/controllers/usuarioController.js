'use strict';

var banco = require('../mock/banco');

function Usuario() {
  this.id = 0;
  this.nome = '';
}

exports.index = function(req, res) {
  console.log('Sera');
  res.render('logar', {});
}

exports.logar = function(req, res) {
  
  var usu = new Usuario(); 
  usu.nome = req.body.usuario;

  var usuario_existente = banco.consultaUsuarioNome(usu.nome);
  console.log('usuario_existente', usuario_existente);
  if(!usuario_existente) {
    usu.id = banco.insereUsuario(usu);
  }else{
    usu = usuario_existente;
  }
  console.log('usu', usu);

  var msg = banco.consultaOutrosUsuarios(usu.id);
  res.render('index', {'usuarios':msg, 'usuario_logado': usu});
}

exports.chat = function(req, res) {

  var id_usuario_rem = req.params.id_usuario_logado;
  var id_usuario_dest = req.params.id_usuario_dest;
  
  var usuario_logado = banco.consultaUsuario(id_usuario_rem);
  var usuario_dest = banco.consultaUsuario(id_usuario_dest);
  console.log('usuario_logado', usuario_logado);

  var mensagens = banco.consultaMensagensUsuario(id_usuario_rem, id_usuario_dest);

  var i, j, min, aux;
  var tam = mensagens.length;

  for (i = 0; i < (tam-1); i++) 
  {
     min = i;
     for (j = (i+1); j < tam; j++) {
       if(mensagens[j].id < mensagens[min].id) 
         min = j;
     }
     if (mensagens[i].id != mensagens[min].id) {
       aux = mensagens[i];
       mensagens[i] = mensagens[min];
       mensagens[min] = aux;
     }
  }

  res.render('chat', {'mensagens':mensagens, 'usuario_logado':usuario_logado, 'usuario_dest':usuario_dest});
}

exports.listar_usuario = function(req, res) {
  var msg = banco.consultaUsuarios();
  res.json(msg);
};

exports.criar_usuario = function(req, res) { 
  var entrada = req.body;
  var usu = new Usuario(); 
  usu.nome = entrada.nome;
  res.json(banco.insereUsuario(usu));
};

exports.consultar_usuario = function(req, res) {
  var msg = banco.consultaUsuario(req.params.id);
  res.json(msg);
};

exports.alterar_usuario = function(req, res) {
	var msg = 'alterar_usuario';
   res.json(msg);
};

exports.delete_usuario = function(req, res) {
		var msg = 'delete_usuario';
		res.json({ message: 'delete_usuario' });
};