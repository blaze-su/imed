import * as mongoose from 'mongoose';

const priceSchema = new mongoose.Schema({
	cost: {
		required: true,
		type: String
	},
	duration: {
		required: true,
		type: String
	},
	title: {
		required: true,
		type: String,
		text: true
	},
	describe: {
		type: String,
		text: true
	},
	marksId: {
		type: [mongoose.Schema.Types.ObjectId],
		ref: 'Mark'
	}
});

export const Price = mongoose.model('Price', priceSchema);
