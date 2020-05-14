// tslint:disable-next-line: no-var-requires
import express, { Router } from 'express';
import mongoose from 'mongoose';
import { PORT, HOST, MONGODB_URL} from "./keys"
import cors from 'cors';

import * as routers from './routers';

const app = express();

console.log("MONGODB_URL", MONGODB_URL);

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
app.use(cors());
app.use('/static', express.static('public/uploads'));
app.get('/', (req, res, next) => {
	res.send('Tour Booking API');
});

// Еnabling routing
app.use(Object.values(routers));

// Start server
app.listen(PORT, () => {
	console.log(`Server started on: ${HOST}:${PORT}`);
});
