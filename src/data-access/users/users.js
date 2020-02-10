import Seqeulize from 'sequelize';
import db from '../../config/database';

const Users = db.define('users', {
	name: {
		type: Seqeulize.STRING,
	},
	email: {
		type: Seqeulize.STRING,
	},
});

export default Users;
