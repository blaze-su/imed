import * as mongoose from 'mongoose';


export interface IPrice {
	id?: string;
	title: string;
	cost: string;
	duration?: string;
	description?: string;
	servicesId: string;
} 


const priceSchema = new mongoose.Schema({
	title: {
		required: true,
		type: String,
		text: true
	},
	cost: {
		required: true,
		type: String
	},
	duration: {
		type: String
	},
	description: {
		type: String,
		text: true
	},
	servicesId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Service'
	}
});

export const Price = mongoose.model('Price', priceSchema);
