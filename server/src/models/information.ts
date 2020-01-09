import * as mongoose from 'mongoose';

const informationSchema = new mongoose.Schema({
	title: {
		type: String
	},
	photo: {
		type: String
	},
	describe: {
		type: String,
		required: true
	}
});

export const Information = mongoose.model('Information', informationSchema);
