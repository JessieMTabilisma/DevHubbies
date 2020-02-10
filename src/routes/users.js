import express from 'express';
import db from '../config/database';
import Users from '../data-access/users/users';

const router = express.Router();

router.get('/', (req, res) =>
	Users.findAll()
		.then(user => {
			console.log(user);
			res.sendStatus(200);
		})
		.catch(err => console.log(err))
);

// add user

export default router;
