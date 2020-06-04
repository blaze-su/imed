import * as mongoose from 'mongoose';

import { IFile } from './file';

export interface IPromo extends mongoose.Document {
	offer: string;
	fileId: IFile;
	title: string;
	date: string;
	description: string;
}

const promoSchema = new mongoose.Schema({
	offer: {
		type: String,
		required: true
	},
	fileId: {
		required: true,
		type: mongoose.Schema.Types.ObjectId,
		ref: 'File'
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
