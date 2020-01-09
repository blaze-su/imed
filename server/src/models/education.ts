import * as mongoose from 'mongoose';

const educationSchema = new mongoose.Schema({
	photo: {
		type: String
	},
	title: {
		required: true,
		type: String
	},
	text: {
		type: [String],
		required: true
	}
});

export const Education = mongoose.model('Education', educationSchema);
