import * as mongoose from 'mongoose';

const articleSchema = new mongoose.Schema({
	title: {
		required: true,
		type: String,
		text: true
	},
	preview: {
		type: String,
		required: true,
		text: true
	},
	chaptersId: {
		type: [mongoose.Schema.Types.ObjectId],
		ref: 'Chapter'
	},
	contrsId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Contr'
	},
	photo: {
		type: String
	},
	marksId: {
		type: [mongoose.Schema.Types.ObjectId],
		ref: 'Mark'
	},
	pricesId: {
		type: [mongoose.Schema.Types.ObjectId],
		ref: 'Price'
	}
});

export const Article = mongoose.model('Article', articleSchema);
