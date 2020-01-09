import * as mongoose from 'mongoose';

const markSchema = new mongoose.Schema({
	title: {
		required: true,
		type: String,
		text: true
	}
});

export const Mark = mongoose.model('Mark', markSchema);
