'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
	let Usuario = sequelize.define('Usuario', {
		id: {
			field: 'id',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		nome: {
			field: 'nome',
			type: DataTypes.STRING,
			allowNull: false
		},
		email: {
			field: 'email',
			type: DataTypes.STRING,
			allowNull: false
		},
		senha: {
			field: 'senha',
			type: DataTypes.STRING,
			allowNull: false

		},

		rua: {
			field: 'rua',
			type: DataTypes.STRING,
			allowNull: false

		},

		numero: {
			field: 'numero',
			type: DataTypes.STRING,
			allowNull: false

		},

		bairro: {
			field: 'bairro',
			type: DataTypes.STRING,
			allowNull: false

		},

		cidade: {
			field: 'cidade',
			type: DataTypes.STRING,
			allowNull: false

		},



		cep: {
			field: 'cep',
			type: DataTypes.STRING,
			allowNull: false
		}

	},
		{
			tableName: 'usuario',
			freezeTableName: true,
			underscored: true,
			timestamps: false,
		});

	return Usuario;
};
