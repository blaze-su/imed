import * as mongoose from 'mongoose';

const describeSchema = new mongoose.Schema({
	title: {
		type: String
	},
	text: {
		type: [String],
		required: true
	}
});

export const Describe = mongoose.model('Describe', describeSchema);
