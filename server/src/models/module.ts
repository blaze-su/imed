import * as mongoose from 'mongoose';

const moduleSchema = new mongoose.Schema({
	title: {
		required: true,
		type: String
	},
	code: {
		type: String,
		required: true
	},
	redirect: {
		type: String,
		required: true
	}
});

export const Module = mongoose.model('Module', moduleSchema);
