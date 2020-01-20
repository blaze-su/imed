import * as mongoose from 'mongoose';

const priceSchema = new mongoose.Schema({
	cost: {
		required: true,
		type: String
	},
	duration: {
		type: String
	},
	title: {
		required: true,
		type: String,
		text: true
	},
	description: {
		type: String,
		text: true
	},
	servicesId: {
		type: [mongoose.Schema.Types.ObjectId],
		ref: 'Service'
	}
});

export const Price = mongoose.model('Price', priceSchema);
