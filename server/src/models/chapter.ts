import * as mongoose from 'mongoose';

const chapterSchema = new mongoose.Schema({
	title: {
		required: true,
		type: String
	},
	describe: {
		type: String,
		required: true
	},
	video: {
		type: String
	},
	photo: {
		type: String
	}
});

export const Chapter = mongoose.model('Chapter', chapterSchema);
