import express from 'express';
import bodyParser from 'body-parser';
import exphbs from 'express-handlebars';
import path from 'path';
import userRoutes from './routes/users';
import db from './config/database';
import dotenv from 'dotenv';
const app = express();

dotenv.config();
const PORT = process.env.PORT || 5000;
db.authenticate()
	.then(() => console.log('database connected'))
	.catch(err => console.log(err));

app.use('/users', userRoutes);

app.listen(PORT, console.log(`Server is running at port ${PORT}`));
