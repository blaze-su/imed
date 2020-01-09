import * as mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
	doctor: {
		type: String,
		required: true
	},
	name: {
		required: true,
		type: String
	},
	number: {
		type: String,
		required: true
	},
	date: {
		required: true,
		type: Date,
		default: Date.now()
	},
	text: {
		required: true,
		type: String
	}
});

export const Review = mongoose.model('Review', reviewSchema);
