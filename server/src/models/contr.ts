import * as mongoose from 'mongoose';

const contrSchema = new mongoose.Schema({
	title: {
		required: true,
		type: String
	},
	text: {
		type: String,
		required: true
	},
	titleList: {
		type: String,
		required: true
	},
	list: {
		type: [String]
	}
});

export const Contr = mongoose.model('Contr', contrSchema);
