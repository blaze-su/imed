import * as mongoose from 'mongoose';

const logSchema = new mongoose.Schema({
	title: {
		required: true,
		type: String
	}
});

export const LogSearch = mongoose.model('Log', logSchema);
