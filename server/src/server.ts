// tslint:disable-next-line: no-var-requires
import express, { Router } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'; dotenv.config();

import * as routers from './routers';

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URL: string = process.env.MONGODB_URL || '';
const connect = mongoose.connect(MONGODB_URL, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true
});

// Connect to MongoDb
connect.then(
	() => {
		console.log('MongoDb is connected...');
	},
	err => {
		console.log(err);
	}
);

app.use('/static', express.static('public/uploads'));
app.get('/', (req, res, next) => {
	res.send('Tour Booking API');
});

// Еnabling routing
app.use(Object.values(routers));

// Start server
app.listen(PORT, () => {
	console.log(`Server started on: http://localhost:${PORT}`);
});
