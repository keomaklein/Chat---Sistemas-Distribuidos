
var usuarioDB = [];
var mensagemDB = [];


module.exports = {

	insereMensagem: function (msg) {
		msg.id = mensagemDB.length + 1;
		mensagemDB.push(msg);
		return mensagemDB;
	},

	consultaMensagens: function () {
		return mensagemDB;
	},

	consultaMensagem: function (id_mensagem) {
		var retorno = {};
		for(var i = 0; i < mensagemDB.length; i++ ) {
			if(mensagemDB[i].id_mensagem == id_mensagem) {
				retorno.push(mensagemDB[i]);
				break;
			}
		};
		return retorno;
	},

	consultaMensagensUsuario: function (id_usuario_rem, id_usuario_dest) {
		var retorno = [];
		
		for(var i = 0; i < mensagemDB.length; i++ ) {
			var usu = mensagemDB[i];
			if( (usu.id_usuario_rem == id_usuario_dest) && (usu.id_usuario_dest == id_usuario_rem) ||
					(usu.id_usuario_rem == id_usuario_rem) && (usu.id_usuario_dest == id_usuario_dest)) {
				retorno.push(mensagemDB[i]);
			}
		};
		return retorno;
	},

	insereUsuario: function (usuario) {
		usuario.id = usuarioDB.length + 1;
		usuarioDB.push(usuario);
		return usuario.id;
	},

	consultaUsuarios: function () {
		return usuarioDB;
	},

	consultaUsuarioNome: function (nome) {
		var retorno = null;
		
		for(var i = 0; i < usuarioDB.length; i++ ) {
			var usu = usuarioDB[i];
			if( usu.nome == nome) {
				console.log('Achou: ', nome);
				retorno = usuarioDB[i];
				break;
			}
		};
		return retorno;
	},

	consultaOutrosUsuarios: function (id) {
		var retorno = [];
		
		for(var i = 0; i < usuarioDB.length; i++ ) {
			var usu = usuarioDB[i];
			if( usu.id != id) {
				console.log('Entrou: ', usu.id, id);
				retorno.push(usuarioDB[i]);
			}
		};
		return retorno;
	},

	consultaUsuario: function (id_usuario) {
		var retorno = {};
		for(var i = 0; i < usuarioDB.length; i++ ) {
			console.log('Teste ', usuarioDB[i].id, id_usuario);
			if(usuarioDB[i].id == id_usuario) {
				retorno = usuarioDB[i];
				break;
			}
		};
		return retorno;
	}

}