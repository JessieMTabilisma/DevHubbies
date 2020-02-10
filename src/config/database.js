import Sequelize from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const db = new Sequelize(process.env.DATABASE, process.env.USER_ADMIN, process.env.PASSWORD, {
	host: 'localhost',
	dialect: 'postgres',
	port: process.env.DB_PORT,
});

export default db;
   