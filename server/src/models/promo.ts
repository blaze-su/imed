import * as mongoose from 'mongoose';

export interface IPromo extends mongoose.Document {
	offer: string;
	photo: string;
	title: string;
	date: string;
	description: string;
	doctorsId: string;
}

const promoSchema = new mongoose.Schema({
	offer: {
		type: String,
		required: true
	},
	doctorsId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Doctor'
	},
	photo: {
		type: String,
		required: true
	},
	title: {
		required: true,
		type: String
	},
	date: {
		type: String,
		required: true
	},
	description: {
		required: true,
		type: String
	}
});

export const Promo = mongoose.model<IPromo>('Promo', promoSchema);
