import * as mongoose from 'mongoose';

export interface IWork extends mongoose.Document {
	name: string;
	number: number;
	email: string;
	role: string;
	message: string;
	file: string;
}

const workScema = new mongoose.Schema({
	name: {
		required: true,
		type: String
	},
	number: {
		required: true,
		type: Number
	},
	email: {
		required: true,
		type: String
	},
	role: {
		type: String,
		required: true
	},
	message: {
		type: String,
		required: false
	},
	file: {
		type: String
	}
});

export const Work = mongoose.model<IWork>('Work', workScema);
